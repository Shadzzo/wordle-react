import React, { useEffect, useState } from "react";

export default function Keypad(props) {
    const [letters, setLetters] = useState(null)
    const letterMap = {
        letters: [
          {"key": "a"}, {"key": "b"}, {"key": "c"}, {"key": "d"},
          {"key": "e"}, {"key": "f"}, {"key": "g"}, {"key": "h"},
          {"key": "i"}, {"key": "j"}, {"key": "k"}, {"key": "l"},
          {"key": "m"}, {"key": "n"}, {"key": "o"}, {"key": "p"},
          {"key": "q"}, {"key": "r"}, {"key": "s"}, {"key": "t"},
          {"key": "u"}, {"key": "v"}, {"key": "w"}, {"key": "x"},
          {"key": "y"}, {"key": "z"}
        ],
    }

    useEffect(() => {
        setLetters(letterMap.letters)
    }, [])

    return (
        <div className="keypad">
            {letters && letters.map(l => {
                const color = props.usedKeys[l.key]
                return (
                    <div key={l.key} className={color}>{l.key}</div>
                )
            })}
        </div>
    )
}