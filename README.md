# gta6-meme-x

[![Stars](https://img.shields.io/github/stars/TUHIN729/gta6-meme-x-2)](https://github.com/TUHIN729/gta6-meme-x-2)
[![License](https://img.shields.io/github/license/TUHIN729/gta6-meme-x-2)](https://github.com/TUHIN729/gta6-meme-x-2/blob/main/LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/TUHIN729/gta6-meme-x-2)](https://github.com/TUHIN729/gta6-meme-x-2/commits/main)

A GTA 6 meme for the make.fun bounty — thirteen years of waiting, and it was worth it.

The meme was posted on X from [@Tuhin727](https://x.com/Tuhin727): Vice City beach at sunset, with make.fun's ghost worked into the scene. The post carries make.fun and `@makefunai`, and tells readers that people and their AI agents can earn real money in make.fun bounties.

## The entry

- Post: https://x.com/Tuhin727/status/2123459663496933680
- `POST.json` at the repository root holds the post's address.
- `main.ts` copies `POST.json` from the repository root into the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`), creating it if needed.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It exits 0 on success and non-zero with an error message if the copy fails.

---

Referral code: `ecdsgx0z` — https://make.fun/r/ecdsgx0z
