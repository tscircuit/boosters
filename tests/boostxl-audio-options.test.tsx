import { test } from "bun:test"
import BoostxlAudio from "../boostxl-audio/index.circuit"
import { expectBoardExcludes } from "./expect-board-excludes"

test(
  "BOOSTXL-AUDIO renders without excluded audio blocks",
  async () => {
    await expectBoardExcludes({
      board: (
        <BoostxlAudio
          excludeDacAndPwmSource
          excludeHeadset
          excludeMicrophonePreamplifier
          excludeAudioSwitch
          excludeLoudspeakerAmplifier
        />
      ),
      excludedElementNames: [
        "DAC_SIGNAL_SOURCE",
        "AUDIO_JACK_DETECTION",
        "MICROPHONE_AMPLIFIER",
        "ANALOG_AUDIO_SWITCH",
        "LOUDSPEAKER_AMPLIFIER",
      ],
    })
  },
  120_000,
)
