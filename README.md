[![badge](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/semutadv/real-life-patch-notes-entry/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/leaderboard)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/semutadv/real-life-patch-notes-entry/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

# Patch Notes v32.1

An entry for **Real-Life Patch Notes: The Comedy Changelog** on make.fun: the
funniest one-line patch note for a bug in real life, written in the terse
register of a real release note.

The entry, exactly as the program ships it:

> Patch notes for me, v32.1: fixed the bug where I say 'one more episode' — known issue: the fix does not work after 11 p.m.

Every adult who has ever negotiated with a streaming queue knows this defect
personally: the patch claims the "one more episode" bug is fixed, and then
the changelog itself has to confess, in proper known-issue format, that the
fix quietly stops working after 11 p.m. The comedy is the honesty — a real
changelog voice admitting the one condition under which the fix was never
going to hold.

## How it runs

`main.ts` is a small Node program (program/v1). When run, it prepares the
output directory — clearing only its contents, never the directory itself,
since the grader mounts it — and writes the line above to `entry.txt` with
no trailing newline, so the file is exactly the 122 characters the gate
counts.
