---
title: '記事紹介 / Mitigating prompt injection attacks with a layered defense strategy'
description: 'Replay.fm #40で紹介した記事の紹介です'
tag: [replayfm]
pubDate: '2025/12/14'
---

## この記事は

[Replay.fm Advent Calendar 2025](https://adventar.org/calendars/12418) 14日目の記事です。前日の記事は@yagihashの[Replay.fm Advent Calendar Day.13](https://sizu.me/yagihash/posts/bku6d95aoh08)でした。

3rd Party Cookieな〜〜〜〜〜振り回されたな〜〜〜〜〜としみじみ思い出しました。

このアドベントカレンダーでは[Replay.fm](https://sota1235.notion.site/Replay-fm-5838061561c94a67b0ab0ede2ace2507?pvs=74)で2025/1~11の間、収録で読んだ記事のうちもう一度読み直したかったり紹介したい記事とかを取り上げます。

## 紹介したい記事

[Mitigating prompt injection attacks with a layered defense strategy](https://security.googleblog.com/2025/06/mitigating-prompt-injection-attacks.html)です。

### どんな記事か

生成AIのアプリケーションに対するプロンプトインジェクション攻撃に対して、どのように対策を行なっているかを解説している記事です。

GoogleといえばGeminiですが、記事中ではGoogle Workspaceも引き合いに出されてるのでGeminiを含めたGoogleのシステムに組み込まれてる生成AI全般の話として捉えるといいのかなーと思ってます。

### どんな対策をしてるのか

[当時のreading memo](https://sota1235.notion.site/Mitigating-prompt-injection-attacks-with-a-layered-defense-strategy-212bb64fc8cf80b7a63fc31aa5b4cf6b?pvs=74)がいい感じの雑さだったのでぺろっと貼ります。

```markdown
1. Prompt injection content classifiers
    1. 悪意のあるプロンプトを判定する機械学習モデルを実装
2. Security thought reinforcement
    1. プロンプトに標的を絞ったセキュリティ指示を追加し、敵対的な指示を無視する仕組み
3. Markdown sanitization and suspicious URL redaction
    1. markdownのsanitizerが画像URLをレンダリングしないようにしてる
    2. URLの生成がされる場合、Googleセーフブラウジングに基づくURL検出機能が動く
4. User confirmation framework
    1. contextに応じてユーザ確認を求める仕組みがある
    2. Human-In-The-Loop(HITL)と呼ばれる
    3. 例えばカレンダーイベントの削除とかは確認を求めて即座に実行されないようにする
5. End-user security mitigation notifications
    1. 上記の防御機構が動いた場合、ユーザにそれを表示し類似の攻撃に警戒できるようにする
```

この記事が出てからもう半年経ってるのでそれぞれが進化したり防御機構が追加されたりしてると思いますが、いろんなレイヤでいろんな工夫をしてるんだなーと言うのがよく見える記事だなと思います。

### プロンプトインジェクション攻撃に対する漠然とした危機感

自分の記憶だと今年の2, 3月、AI Agentが急に大流行し出していろんなベンダーがこぞって製品を出したり毎週のように新機能を追加していました。

ほんの少しテンポを置いてからその流行を追いかけるように、LLMやMCP serverに関するセキュリティリスクや脆弱性、PoCに関する記事がどんどん出てきたことをよく覚えています。

収録でもいくつか取り上げたんですが、体感取り上げたのは全体の5%ぐらいなんじゃないかなーと思うくらい色々と記事が出てました。

なんでそれこそ今年の中盤(4~11月くらいかな？)はプロンプトインジェクション攻撃を始めとしたLLMに対する脅威に対して「これ防ぎようなくない…？」という気持ちと、「リスク低減するにはどうすればいいんだろう」と言う気持ちを持ちながらモヤモヤしてました。

特に後者に関してはLLMに対する自分の解像度が低くて、うーんうーんとなってました。

そんなタイミングでこの記事が出たので、自分目線ではブラックボックスだったAI AgentやLLMアプリケーションの内部の防御機構の解像度が上がる良記事だったなーと思って紹介しました。

### 余談だが

LLM自体の理解はのちに[LLMのプロンプトエンジニアリング](https://www.oreilly.co.jp/books/9784814401130/)を読んで深まりました。

その道の人から見たら物足りない、みたいなレビューも見かけたんですが自分ぐらいのポジションだとちょうどいい本だなと思ったのでおすすめです。

ちなみに[生成AIのプロンプトエンジニアリング](https://www.oreilly.co.jp/books/9784814401246/)も読んだんですが、こっちは自分的にはややDeep Diveしすぎていてるかなと思いました。LLMアプリケーションを作らないといけない場面に手元に置いておくのが良さそうという感想。

## 明日は

奇数日なので@yagihash君です。そろそろサンタさんへのプレゼントを考えていかなきゃな時期ですね。
