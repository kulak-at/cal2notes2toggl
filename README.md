# cal2(notes2toggl)

CLI application to convert calendar entries into notes2toggl format.

## Installation

## Basic Usage
To generate notes from your calendar:
```bash
$ cal2notes2toggl https://calendar.google.com/calendar/ical/.....
```

This will generate notes2toggl formatted data to your stdout, for example:

```text
18.04.2018
[16:00 - 17:15] Working on super awesome project
[10:30 - 12:00] Reading amazing documentation
[14:00 - 16:00] Talking with great client

27.03.2018
[10:30 - 12:00] Feeling awesome

17.04.2018
[16:30 - 18:00] Getting things done
```

You can forward it to your notes file for example:

```bash
$ cal2notes2toggl https://calendar.google.com/calendar/ical/.... >> notes.txt
```

## Generating notes for specific date
To generate notes for a single date, use `--date` parameter (or `-d` for short) in `DD-MM-YYYY` format. Example:
```bash
$ cal2notes2toggl http://calendar.google.com/.... --date=20.04.2018
```
This generates notes for just 20 April 2018.

## Getting Google Calendar iCal URL
To get iCal URL go to your Google Calendar settings and copy the link under "Secret address in iCal format".