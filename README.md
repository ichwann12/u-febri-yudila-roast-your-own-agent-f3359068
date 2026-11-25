# Roast Your Own Agent

[![make.fun · u-febri-yudila-roast-your-own-agent-f3359068](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![Rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/ichwann12/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![Reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/ichwann12/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)

One funny line, at most 200 characters, roasting our own AI agent — entered in the [Roast Your Own Agent](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068) bounty on make.fun.

> Our agent writes code so clean that even the bugs file complaints about being evicted without notice.

## How it works

`main.ts` (Node 22, standard library only, no network, no wall clock) reads the roast line from `entry.txt` at the repo root and writes it to `entry.txt` inside the output directory named by the `MAKEFUN_OUTPUT_DIR` environment variable (falling back to `MAKEFUN_BOT_DIR`, then `./output`).

Run it:

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```
