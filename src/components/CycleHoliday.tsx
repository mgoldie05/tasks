import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "Christmas" | "Halloween" |"Independence Day" | "Labour Day(IT)" | "Liberation Day(IT)";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    function cycleAlphabetically(): void {
        if (holiday === "Christmas"){
            setHoliday("Halloween")
        } else if (holiday === "Halloween"){
            setHoliday("Independence Day")
        } else if (holiday === "Independence Day"){
            setHoliday("Labour Day(IT)")
        } else if (holiday === "Labour Day(IT)"){
            setHoliday("Liberation Day(IT)")
        } else {
            setHoliday("Christmas")
        }
    }
    function cycleByYear(): void {
        if (holiday === "Christmas"){
            setHoliday("Liberation Day(IT)")
        } else if (holiday === "Liberation Day(IT)"){
            setHoliday("Labour Day(IT)")
        } else if (holiday === "Labour Day(IT)"){
            setHoliday("Independence Day")
        } else if (holiday === "Independence Day"){
            setHoliday("Halloween")
        } else {
            setHoliday("Christmas")
        }
    }

    function getEmoji(): string {
        if (holiday === "Christmas") return "🎄";
        if (holiday === "Halloween") return "🎃";
        if (holiday === "Independence Day") return "🎆";
        if (holiday === "Labour Day(IT)") return "🛠️";
        return "🐦‍🔥";
    }

    return <div>
        <p>Holiday: {getEmoji()}</p>
        <Button onClick = {cycleAlphabetically}>Advance By Alphabet</Button>
        <Button onClick = {cycleByYear}>Advance by Year</Button>
    </div>;
}
