import { RadioGroup, Switch } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";

const modes = ["light", "dark"];
const colors = ["green", "red", "blue"];


export default function Home() {
  const [color, setColor] = useState(colors[0]);
  const [mode, setMode] = useState(modes[0]);
  return (
    <div
      className={[
        "font-mono bg-primaryBg h-screen flex flex-col justify-center",
        `theme-${color}`,
        `theme-${mode}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="mx-auto bg-neutralBg border-8 border-onNeutralBg text-onNeutralBg p-5 max-w-lg">
        <h1 className="text-3xl font-bold text-center">Hello Theme World</h1>
        <RadioGroup value={color} onChange={setColor}>
          <RadioGroup.Label className="block mt-5">
            Select a Color
          </RadioGroup.Label>
          <div className="flex justify-between space-x-4 mt-2">
            {colors.map((c) => {
              return (
                <RadioGroup.Option
                  className="ui-checked:text-onPrimaryBg ui-checked:bg-primaryBg ring-4 ui-checked:ring-primary ui-not-checked:ring-onNeutralBg h-20 w-full flex justify-center items-center font-bold uppercase cursor-pointer"
                  value={c}
                  key={c}
                >
                  {c}
                </RadioGroup.Option>
              );
            })}
          </div>
        </RadioGroup>
        <Switch.Group>
          <div className="mt-10">
            <Switch.Label className="block">Enable Dark Mode:</Switch.Label>
            <Switch
              className="bg-onNeutralBg h-6 w-11 rounded-full relative inline-flex items-center"
              checked={mode === "dark"}
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            >
              <span className="h-4 w-4 bg-neutralBg rounded-full inline-block transform transition ui-not-checked:translate-x-1 ui-checked:translate-x-6" />
            </Switch>
          </div>
        </Switch.Group>
      </div>
    </div>
  );
}
