---
title: "記事紹介 / Google fixes flaw that could unmask YouTube users' email addresses"
description: 'Replay.fm #23で紹介した記事の紹介です'
tag: [replayfm]
pubDate: '2025/12/08'
---

## この記事は

[Replay.fm Advent Calendar 2025](https://adventar.org/calendars/12418) 8日目の記事です。前日の記事は@yagihashの[Replay.fm Advent Calendar Day.7](https://sizu.me/yagihash/posts/krzd25ta7tcz)でした。

このアドベントカレンダーでは[Replay.fm](https://sota1235.notion.site/Replay-fm-5838061561c94a67b0ab0ede2ace2507?pvs=74)で2025/1~11の間、収録で読んだ記事のうちもう一度読み直したかったり紹介したい記事とかを取り上げます。

## 紹介したい記事

[Google fixes flaw that could unmask YouTube users' email addresses](https://www.bleepingcomputer.com/news/security/google-fixes-flaw-that-could-unmask-youtube-users-email-addresses/)です。エグい量の記事を供給してくれることにもすっかり慣れたBleeping Computerの記事ですね。

### どんな記事か

任意のYouTubeチャンネルの(おそらく)配信アカウントのメールアドレスが取得可能な状態にあった脆弱性に関して紹介している記事です(※ 2025/2/9に修正済み)。

要約は一文でできてしまう記事なんですが、何せこの脆弱性の内容が面白い。

### 脆弱性の内容をざっくり

当時、記事を読んだ際にメモったものをそのまま貼り付けます。

```markdown
- Googleサービスを横断して使われる内部識別子であるGaia IDなるものがある
- これは通常、外部からアクセスできないがYouTube APIの一部を利用することでGaia IDがレスポンスから得られるのを見つけた
    - 誰かをブロックしようとする際のAPI
    - Base64エンコードされたGaia IDが取れる
- これを利用することでさまざまなYouTubeチャンネルのGaia IDを取得可能
- Gaia IDをメールアドレスに変換する方法がないか探索したところ、[Pixel Recorder](https://recorder.google.com/)のAPIで可能なことを発見
- 該当するAPIは録画共有用のAPI、なのでメールアドレスを実際に特定しようとすると被害者にメールが送信されてしまう
- これを回避するために録音ファイル名の長さをべらぼうに長くすることでメール送信がされない状態を作れた ✨
```

ちなみにBleeping Computerの記事にはここまで詳しく書いていなくて、一次ソースの[Leaking the email of any YouTube user for $10,000
](https://brutecat.com/articles/leaking-youtube-emails)を読みました。

Bleeping Computer, The Hacker Newsみたいなメディアの記事を読むときは一次ソースを当たるのがめちゃくちゃ大事。

### 個人的な面白ポイント

一見すると害のなさそうな内部情報を取得できる、という状態からメールアドレスの特定まで辿り着く様が鮮やかというかピタゴラスイッチみたいで気持ちいいなぁと。

一次ソースの方の記事がその流れを丁寧に追って書いてくれてるのでぜひ読んでみてほしいです。

Googleみたいに星の数のサービスを提供している会社だと1つのサービスでのちょっとした実装ミスと端っこにあるマイナー(?)サービスを組み合わせることでCriticalな脆弱性に繋がってしまった、という点も示唆があると思ってます。

自分が事業会社で働く上でも「単体だと何の害もない脆弱性」みたいなのは割とあるあるだと思ってて、単体で見た時にリスクが低く評価されてしまう可能性もあるんですが組み合わせ次第では危ないよねーと思っててその実例として学びがありました。

## 明日は

奇数日なので@yagihash君です。クリスマスももうすぐですね。
