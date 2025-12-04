---
title: '記事紹介 / An important update (and apology) on our PoisonSeed blog'
description: 'Replay.fm #46で紹介した記事の紹介です'
tag: [replayfm]
pubDate: '2025/12/04'
---

## この記事は

[Replay.fm Advent Calendar 2025](https://adventar.org/calendars/12418) 4日目の記事です。前日の記事は@yagihashの[Replay.fm Advent Calendar Day.3
](https://sizu.me/yagihash/posts/vcw2d0dz8diz)でした。

このアドベントカレンダーでは[Replay.fm](https://sota1235.notion.site/Replay-fm-5838061561c94a67b0ab0ede2ace2507?pvs=74)で2025/1~11の間、収録で読んだ記事のうちもう一度読み直したかったり紹介したい記事とかを取り上げます。

## 紹介したい記事

[An important update (and apology) on our PoisonSeed blog](https://expel.com/blog/an-important-update-and-apology-on-our-poisonseed-blog/)です。

結論から言うと、かなり変わり種の記事紹介です。サマリーとしては

- PoisonSeed blogにて、[Cross-Device Sign-In](https://www.passkeycentral.org/design-guidelines/optional-patterns/cross-device-sign-in)で使われるQRコードを悪用することでpasskey認証に対するフィッシング攻撃が可能と言うブログが出る
  - 該当ブログは削除済みの模様
- 7月ごろの収録でsotaが引っ張ってきて紹介
  - いや、攻撃できるのおかしくね？となるもpasskeyの仕様知り尽くせてるわけじゃないしわからぬ。。。となる
- 後日、PoisonSeed blogにて該当ブログが間違っていたことの報告と謝罪記事が出る
  - これが今回紹介した記事

### 何が間違っていたか

Cross-Device Sign-Inを用いてQRコードを表示し、それを攻撃者が利用者に送ることで中間者攻撃のポジションに立つことは確かに可能。

だが、認証を求めるサイト = QRコードを表示している端末と、passkey認証を行う端末 = 利用者の端末が物理的に近接していないと認証は通らないため攻撃者が中間にたっても認証を突破することはできない。

元々の記事ではその部分が抜け落ちた検証を行なっていた。

### 個人的な反省

Podcastを始めた当初の目的である、多くのfeedから多くの知識をひたすらインプットしていく過程で「セキュリティベンダのブログが言ってることは概ね正しいだろう」というバイアスに支配されていたこと。

自分自身がちゃんと勉強できていない領域の知識をインプットする際に真偽の判断をできてなかったことの2つで反省したきっかけの記事だった。

Podcastでよく触れてるが、インプットの物量に舵を切ると1つ1つの要素を深掘りする時間を取るのが難しいのでどうしても浅く広くの傾向になる部分がある。

ただそれを言い訳にはせず、自分がキャッチアップすべきと思ったものはある程度diveしていく必要があるなぁと思わされるきっかけになった記事(事件?)だったのでご紹介。

あとは結構、ここまで派手に間違えたブログがベンダーから出るケース自体は珍しいと言う意味では貴重な記事かも知れない。

## 明日は

奇数日なので@yagihash君です。お楽しみに！
