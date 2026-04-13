#Requires -Version 5.1
<#
.SYNOPSIS
  Replaces branch history with synthetic empty commits (dated), then one real commit with current files.

.DESCRIPTION
  Creates backup/pre-fake-history, renames current branch to main-old, builds orphan main with
  monthly --allow-empty commits from -StartDate through -EndDate, then commits the working tree.

  After this, push with: git push --force-with-lease origin main

.PARAMETER StartDate
  First synthetic commit date (default 2016-01-01).

.PARAMETER EndDate
  Last synthetic empty commit date (default: today UTC date).

.EXAMPLE
  .\scripts\make-fake-history.ps1
.EXAMPLE
  .\scripts\make-fake-history.ps1 -StartDate 2016-06-01 -EndDate 2026-04-01
#>
param(
  [datetime]$StartDate = [datetime]::ParseExact("2016-01-01", "yyyy-MM-dd", $null),
  [datetime]$EndDate = [datetime]::Today
)

$ErrorActionPreference = "Stop"
$RepoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $RepoRoot

if (-not (Test-Path ".git")) {
  Write-Error "Not a git repository: $RepoRoot"
}

$currentBranch = (git branch --show-current).Trim()
if ([string]::IsNullOrEmpty($currentBranch)) {
  Write-Error "Detached HEAD. Checkout a branch (e.g. main) and run again."
}

# One backup ref; overwrite if re-run (user can delete backup manually if needed)
$backupName = "backup/pre-fake-history"
git branch -f $backupName HEAD | Out-Null

$preservedName = "main-old"
if ($currentBranch -eq "main") {
  if ((git show-ref --verify --quiet "refs/heads/$preservedName")) {
    Write-Error "Branch '$preservedName' already exists. Delete or rename it, then re-run."
  }
  git branch -m main $preservedName
} else {
  Write-Host "Current branch is '$currentBranch' (not main). Renaming to '$preservedName' and creating orphan 'main'."
  if ((git show-ref --verify --quiet "refs/heads/$preservedName")) {
    Write-Error "Branch '$preservedName' already exists. Delete or rename it, then re-run."
  }
  git branch -m $currentBranch $preservedName
}

git checkout --orphan main

# Orphan inherits index from previous branch; drop staged tree for empty commits
git rm -rf --cached . 2>$null | Out-Null

$samples = @(
  "chore: housekeeping",
  "fix: styles and layout",
  "refactor: component structure",
  "chore: update assets",
  "fix: copy and links",
  "chore: deps",
  "refactor: cleanup",
  "fix: responsive tweaks"
)

function Format-GitDate([datetime]$dt) {
  $off = [TimeZoneInfo]::Local.GetUtcOffset($dt)
  $totalMins = [int]$off.TotalMinutes
  $sign = if ($totalMins -ge 0) { "+" } else { "-" }
  $abs = [Math]::Abs($totalMins)
  $hPart = [int]([Math]::Floor($abs / 60))
  $mPart = $abs % 60
  $tz = $sign + $hPart.ToString("00") + $mPart.ToString("00")
  return "$($dt.ToString('yyyy-MM-dd HH:mm:ss')) $tz"
}

$d = Get-Date $StartDate.Date
$end = Get-Date $EndDate.Date
$idx = 0
while ($d -le $end) {
  $iso = Format-GitDate $d
  $env:GIT_AUTHOR_DATE = $iso
  $env:GIT_COMMITTER_DATE = $iso
  $msg = $samples[$idx % $samples.Length] + " ($($d.ToString('yyyy-MM')))"
  git commit --allow-empty -m $msg
  $idx++
  $d = $d.AddMonths(1)
}

Remove-Item Env:\GIT_AUTHOR_DATE -ErrorAction SilentlyContinue
Remove-Item Env:\GIT_COMMITTER_DATE -ErrorAction SilentlyContinue

git add -A
git diff --cached --quiet 2>$null
if ($LASTEXITCODE -ne 0) {
  git commit -m "chore: sync project tree"
} else {
  Write-Warning "Nothing to commit in final step (empty tree?)."
}

Write-Host ""
Write-Host "Done."
Write-Host "  Previous tip: $preservedName and $backupName"
Write-Host "  New history:  main ($(git rev-list --count HEAD) commits)"
Write-Host "If you use a remote:  git push --force-with-lease origin main"
