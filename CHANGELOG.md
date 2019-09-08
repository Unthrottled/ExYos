Changelog
---

## 2.4.0
- Able to unflip items rightside-up to the right
    - `unflip -happy -right` (ヽᐛ)ヽ┳━┳
    - `unflip -cool -right Thanks Obama` (ヽ-■_■)ヽThanks Obama

## 2.3.0
- Added force velocity command argument
    - `/exyos flip -happy -force` (╯ᐛ)╯彡┻━┻
    
- Able to flip items upside-down to the left
    - `/exyos flip -happy -force -left` ┻━┻ミ└(ᐖ└)
    - `/exyos flip -cool -left Thanks Obama` ɐɯɐqO sʞuɐɥ┴︵└(■_■-└)

## 2.2.0

- More `Suddenly` Expressions!

    - `/exyos suddenly -look` ( ఠ_ఠ)
    - `/exyos suddenly -deadpan` ( ●_●)
    - `/exyos suddenly -solemn` ( º _ º)
    - `/exyos suddenly -lenny` ( ͡° ͜ʖ ͡°)
    - `/exyos suddenly -anguish` ( ಥ_ಥ)
    - `/exyos suddenly -smile` ( ◕ ◡ ◕)
    - `/exyos suddenly -happy` ( ᐛ)
    - `/exyos suddenly -pretty` ( ✿◕‿◕)
    - `/exyos suddenly -cool` (-■_■)
    - `/exyos suddenly -strained` ( ‶⇀‸↼)
    - `/exyos suddenly -puppy` ( •ᴥ•)
    - `/exyos suddenly -yell` ( °□°)
    - `/exyos suddenly -rage` ( ಠ益ಠ)
    - `/exyos suddenly -alarmed` ( ◉Д◉)
    -`/exyos suddenly -cool swagger`
    
    ```
    ⊂_ヽ
    　 ＼＼ ＿
     　　 ＼(-■_■) S
    　　　 <　⌒ヽ W
    　　　/ 　 へ＼ A
    　　 /　　/　＼＼ G
    　　 ﾚ　ノ　　 ヽ_つ G
    　　/　/ E
    　 /　/| R
    　(　(ヽ
    　|　|、＼
    　| 丿 ＼ ⌒)
    　| |　　) /
    `ノ )　 Lﾉ
    ```

## 2.1.0

- Implemented request verification [for slack](https://api.slack.com/docs/verifying-requests-from-slack).

## 2.0.0

- External API Availability!!
    - Currently Support's `Sign Bunny`
        
                curl --request POST \
                  --url https://exyos.acari.io/api/sign-bunny \
                  --header 'content-type: application/json' \
                  --data '{
                    "signWords": "Existence is pain"
                }'

## 1.6.0
- Grammar is hard fixed a typo in one of the the identifying message
    - `@Steve spent to long thinking about sending this.` -> `@Steve spent too long thinking about sending this.`
- More UnFlip Expressions!
    - `/exyos unflip -solemn` ┳━┳ノ(º _ ºノ)
    - `/exyos unflip -anguish` ┳━┳ノ(ಥ_ಥノ)
    - `/exyos unflip -lenny` ┳━┳ノ(͡° ͜ʖ ͡°ノ)
    - `/exyos unflip -smile` ┳━┳ノ(◕ ◡ ◕ノ)
    - `/exyos unflip -happy` ┳━┳ノ(ᐖノ)
    - `/exyos unflip -cool` ┳━┳ノ(■_■-ノ)
    - `/exyos unflip -puppy` ┳━┳ノ(•ᴥ•ノ)
    - `/exyos unflip -pretty` ┳━┳ノ(◕‿◕✿ノ)
    - `/exyos unflip -deadpan` ┳━┳ノ(●_●ノ)
    - `/exyos unflip -look` ┳━┳ノ(ಠ_ಠノ)
    - `/exyos unflip -strained` ┳━┳ノ(⇀‸↼‶ノ)

## 1.5.0

- More flip expressions!
    - `/exyos flip -look -table` (╯ఠ_ఠ)╯︵┻━┻
    - `/exyos flip -deadpan -table` (╯●_●)╯︵┻━┻
    - `/exyos flip -solemn -table` (╯º _ º)╯︵┻━┻
    - `/exyos flip -lenny -table` (╯͡° ͜ʖ ͡°)╯︵┻━┻
    - `/exyos flip -anguish -table` (╯ಥ_ಥ)╯︵┻━┻
    - `/exyos flip -smile -table` (╯◕ ◡ ◕)╯︵┻━┻
    - `/exyos flip -happy -table` (╯ᐛ)╯︵┻━┻
    - `/exyos flip -pretty -table` (╯✿◕‿◕)╯︵┻━┻
    - `/exyos flip -cool -table` (╯-■_■)╯︵┻━┻
    - `/exyos flip -strained -table` (╯‶⇀‸↼)╯彡┻━┻
    - `/exyos flip -puppy -table` (╯•ᴥ•)╯︵┻━┻

## 1.4.1

- Sign command handles newlines in the input better!
    - `/exyos sign shots
              shots
              shots
              shots`
 ```$xslt
___________________
|  SHOTS          |
|  SHOTS          |
|  SHOTS          |
|  SHOTS          |
___________________
 (\__/) ||
 (•ㅅ•) ||
 / 　 づ
```      
              

## 1.4.0

- Added ASCII art option to the `phrase` command!
  - Usage: 
    - `/exyos phrase -bouncer`
    - `/exyos phrase -bouncer Not Today`

## 1.3.2
- Installed personality module.
    - ExYos has some clever things to say in response to your request.

## 1.3.1
- Non-Functional Release
    - Added TS Lint.

## 1.3.0
- Defaulting the `flip` and `unflip` commands to tables of any non-command strings are provided.
    - Including but not limited to these combination.
        - `/exyos flip` (╯°□°)╯︵┻━┻
        - `/exyos unflip` ┳━┳ノ(º _ ºノ)
        - `/exyos flip thanks obama` (╯°□°)╯︵ɐɯɐqo sʞuɐɥʇ
        - `/exyos unflip thanks obama` thanks obamaノ(º _ ºノ)
        - `/exyos flip -rage` (╯ಠ益ಠ)╯彡┻━┻
        - `/exyos unflip -rage`┳━┳ノ(ಠ益ಠノ)

## 1.2.2

- Enhanced Font specification!
    - Font names are no longer case-sensitive! Seriously!.
        - try: `/exyos -f="gHoSt" 2Spooky4Me`!

## 1.2.1

- Mac Users can now specify a font of their choosing
    - Better MacOS Smart Quote Handling.

## 1.2.0
- ASCII Art Phrases
    - `/exyos phrase Memes`
    - `/exyos phrase -font="Def Leppard" Def Leppard`
    - `/exyos phrase -f="Def Leppard" Def Leppard`
    - `/exyos phrase -help`
        - Gives you a list of all available fonts.

## 1.1.0

- Non-Functional changes:
    - Typescript Support

## 1.0.0
- MVP Release!
- Added Suddenly Expressions
    - `/exyos suddenly`
    - `/exyos suddenly Swagger`

## 0.5.0
- Better Help documentation

- Added Sign Bunny expressions!
    - `/exyos sign`
    - `/exyos sign Dont Dead Open Inside`

- Added more expressiveness functionality:

    - `/exyos unflip -alarmed`


## 0.4.0
More expressions are available!
Feel free to combine for added expressiveness.

- `/exyos flip -rage`
- `/exyos flip -alarmed`
- `/exyos unflip -rage`

Added help functionality!

- `/exyos flip -help`
- `/exyos unflip -help`

## 0.3.0

Tables can now be flipped and unflipped!
- `/exyos flip -table`
- `/exyos unflip -table`

## 0.2.0

The user command will no longer be sent in channel, just the ExYos response.

## 0.1.0

Supports the following commands:
- `/exyos flip Some Phrase`
- `/exyos unflip Some Phrase`
