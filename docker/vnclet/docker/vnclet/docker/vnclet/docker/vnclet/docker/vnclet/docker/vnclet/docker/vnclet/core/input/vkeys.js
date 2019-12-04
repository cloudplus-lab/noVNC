/*
 * noVNC: HTML5 VNC client
 * Copyright (C) 2018 The noVNC Authors
 * Licensed under MPL 2.0 or any later version (see LICENSE.txt)
 */

/*
 * Mapping between Microsoft® Windows® Virtual-Key codes and
 * HTML key codes.
 */

export default {
    0x08: 'Backspace',
    0x09: 'Tab',
    0x0a: 'NumpadClear',
    0x0c: 'Numpad5', // IE11 sends evt.keyCode: 12 when numlock is off
    0x0d: 'Enter',
    0x10: 'ShiftLeft',
    0x11: 'ControlLeft',
    0x12: 'AltLeft',
    0x13: 'Pause',
    0x14: 'CapsLock',
    0x15: 'Lang1',
    0x19: 'Lang2',
    0x1b: 'Escape',
    0x1c: 'Convert',
    0x1d: 'NonConvert',
    0x20: 'Space',
    0x21: 'PageUp',
    0x22: 'PageDown',
    0x23: 'End',
    0x24: 'Home',
    0x25: 'ArrowLeft',
    0x26: 'ArrowUp',
    0x27: 'ArrowRight',
    0x28: 'ArrowDown',
    0x29: 'Select',
    0x2c: 'PrintScreen',
    0x2d: 'Insert',
    0x2e: 'Delete',
    0x2f: 'Help',
    0x30: 'Digit0',
    0x31: 'Digit1',
    0x32: 'Digit2',
    0x33: 'Digit3',
    0x34: 'Digit4',
    0x35: 'Digit5',
    0x36: 'Digit6',
    0x37: 'Digit7',
    0x38: 'Digit8',
    0x39: 'Digit9',
    0x5b: 'MetaLeft',
    0x5c: 'MetaRight',
    0x5d: 'ContextMenu',
    0x5f: 'Sleep',
    0x60: 'Numpad0',
    0x61: 'Numpad1',
    0x62: 'Numpad2',
    0x63: 'Numpad3',
    0x64: 'Numpad4',
    0x65: 'Numpad5',
    0x66: 'Numpad6',
    0x67: 'Numpad7',
    0x68: 'Numpad8',
    0x69: 'Numpad9',
    0x6a: 'NumpadMultiply',
    0x6b: 'NumpadAdd',
    0x6c: 'NumpadDecimal',
    0x6d: 'NumpadSubtract',
    0x6e: 'NumpadDecimal', // Duplicate, because buggy on Windows
    0x6f: 'NumpadDivide',
    0x70: 'F1',
    0x71: 'F2',
    0x72: 'F3',
    0x73: 'F4',
    0x74: 'F5',
    0x75: 'F6',
    0x76: 'F7',
    0x77: 'F8',
    0x78: 'F9',
    0x79: 'F10',
    0x7a: 'F11',
    0x7b: 'F12',
    0x7c: 'F13',
    0x7d: 'F14',
    0x7e: 'F15',
    0x7f: 'F16',
    0x80: 'F17',
    0x81: 'F18',
    0x82: 'F19',
    0x83: 'F20',
    0x84: 'F21',
    0x85: 'F22',
    0x86: 'F23',
    0x87: 'F24',
    0x90: 'NumLock',
    0x91: 'ScrollLock',
    0xa6: 'BrowserBack',
    0xa7: 'BrowserForward',
    0xa8: 'BrowserRefresh',
    0xa9: 'BrowserStop',
    0xaa: 'BrowserSearch',
    0xab: 'BrowserFavorites',
    0xac: 'BrowserHome',
    0xad: 'AudioVolumeMute',
    0xae: 'AudioVolumeDown',
    0xaf: 'AudioVolumeUp',
    0xb0: 'MediaTrackNext',
    0xb1: 'MediaTrackPrevious',
    0xb2: 'MediaStop',
    0xb3: 'MediaPlayPause',
    0xb4: 'LaunchMail',
    0xb5: 'MediaSelect',
    0xb6: 'LaunchApp1',
    0xb7: 'LaunchApp2',
    0xe1: 'AltRight', // Only when it is AltGraph
};
