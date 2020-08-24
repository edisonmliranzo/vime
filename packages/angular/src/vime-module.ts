import { NgModule } from '@angular/core';
import { defineCustomElements } from '@vime/core/loader';
import {
  VimePlayer,
  VimeAudio,
  VimeCaptionControl,
  VimeCaptions,
  VimeClickToPlay,
  VimeControl,
  VimeControlGroup,
  VimeControlSpacer,
  VimeControls,
  VimeCurrentTime,
  VimeDailymotion,
  VimeDash,
  VimeDefaultControls,
  VimeDefaultSettings,
  VimeDefaultUi,
  VimeEmbed,
  VimeEndTime,
  VimeFaketube,
  VimeFile,
  VimeFullscreenControl,
  VimeHls,
  VimeIcon,
  VimeIcons,
  VimeLiveIndicator,
  VimeMenu,
  VimeMenuItem,
  VimeMenuRadio,
  VimeMenuRadioGroup,
  VimeMuteControl,
  VimePipControl,
  VimePlaybackControl,
  VimePoster,
  VimeScrim,
  VimeScrubberControl,
  VimeSettings,
  VimeSettingsControl,
  VimeSlider,
  VimeSpinner,
  VimeSubmenu,
  VimeTime,
  VimeTimeProgress,
  VimeTooltip,
  VimeUi,
  VimeVideo,
  VimeVimeo,
  VimeVolumeControl,
  VimeYoutube,
} from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  VimePlayer,
  VimeAudio,
  VimeCaptionControl,
  VimeCaptions,
  VimeClickToPlay,
  VimeControl,
  VimeControlGroup,
  VimeControlSpacer,
  VimeControls,
  VimeCurrentTime,
  VimeDailymotion,
  VimeDash,
  VimeDefaultControls,
  VimeDefaultSettings,
  VimeDefaultUi,
  VimeEmbed,
  VimeEndTime,
  VimeFaketube,
  VimeFile,
  VimeFullscreenControl,
  VimeHls,
  VimeIcon,
  VimeIcons,
  VimeLiveIndicator,
  VimeMenu,
  VimeMenuItem,
  VimeMenuRadio,
  VimeMenuRadioGroup,
  VimeMuteControl,
  VimePipControl,
  VimePlaybackControl,
  VimePoster,
  VimeScrim,
  VimeScrubberControl,
  VimeSettings,
  VimeSettingsControl,
  VimeSlider,
  VimeSpinner,
  VimeSubmenu,
  VimeTime,
  VimeTimeProgress,
  VimeTooltip,
  VimeUi,
  VimeVideo,
  VimeVimeo,
  VimeVolumeControl,
  VimeYoutube,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class VimeModule {}
