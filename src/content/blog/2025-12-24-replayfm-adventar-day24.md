---
title: '記事紹介 / GitHub Actions Supply Chain Attack: A Targeted Attack on Coinbase Expanded to the Widespread tj-actions/changed-files Incident: Threat Assessment'
description: 'Replay.fm #30で紹介した記事の紹介です'
tag: [replayfm]
pubDate: '2025/12/24'
---

## この記事は

[Replay.fm Advent Calendar 2025](https://adventar.org/calendars/12418) 24日目の記事です。前日の記事は@yagihashの[Replay.fm Advent Calendar Day.23](https://sizu.me/yagihash/posts/uc3mrz60twos)でした。

このアドベントカレンダーでは[Replay.fm](https://sota1235.notion.site/Replay-fm-5838061561c94a67b0ab0ede2ace2507?pvs=74)で2025/1~11の間、収録で読んだ記事のうちもう一度読み直したかったり紹介したい記事とかを取り上げます。

私のバトンはこれで最後！！！

## 紹介したい記事

[GitHub Actions Supply Chain Attack: A Targeted Attack on Coinbase Expanded to the Widespread tj-actions/changed-files Incident: Threat Assessment (Updated 4/2)](https://unit42.paloaltonetworks.com/github-actions-supply-chain-attack/)です。

個人的にはこれ抜きでは2025年は語れない。

### どんな記事か

当時も世間を騒がせていた[tj-actions/changed-files](https://github.com/tj-actions/changed-files)が侵害され、マルウェアが仕込まれたインシデントに関するレポートです。

この記事以外にも多くの記事やレポートが出ていましたね。

このインシデントが注目を浴びた理由は、それなりにシェアのある3rd party actionsが侵害された事例だったからと思われます。

3rd party actionsへの侵害によるサプライチェーン攻撃は、原理上発生することは知ってる人は知っている状態であり、GitHubの公式リファレンスにも言及がありました。

https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions

一方で世の中のGitHub Actionsの実装を見るとこれに対する対策(バージョンのhash固定等)が一般的に行われていたとは言えず、また大きめのインシデントも発生してなかったのが当時の状況かなぁと思います。

### 起きると思ったことは起きる

我が同僚でありReplay.fmの相方であるyagihashの言葉(もしくは考え方)に「起きると思ったことは起きる」というのがあって、個人的には結構好きな考え方なんですが今回のインシデントはまさにその事例だったと思います。

原理上は起きる、起きた時に脅かされる資産も軽くないケースがある、でもあんまり目立った事件は起きてない、という状況だったんで起きるべくして起きたなというか、個人的に感想としては「とうとう来たかー」という気持ちでした。

### 備えあって憂いなし

半分、自慢にはなるんですが職場ではこの事例に対する緩和策をいくつか実施済みだったので被害に遭わずに済みました。

なぜ実施済みだったかというと「うちの大事な情報資産へのアクセスパスは何があるんだろう」と考えたときにGitHub Actionsが上がり、そこに対して対策打ててないよね、じゃあ打とう、となったからでした。

正直、当時はやるべきだと思いながら取り組んでる一方で「うちと同じくらいのスタートアップでここまでやってるところあるのかな…やりすぎかな…」という気持ちも少しあったんですが、今回の件で回避できたことでちょっぴり自信がついたというか、自分の仮説が裏付けられた感覚を得られたのが印象深かったです。

ちなみにこの件を受けて更なる対策の強化はしたんですが詳細はいずれ会社のブログで紹介できればと思います。

## 明日は

奇数日なので@yagihash君です。大トリ！メリークリスマス！
