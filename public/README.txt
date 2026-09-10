All the images (and the resume) this site looks for, in one place.
Everything here is optional - the site works fine without any of it,
and each entry just falls back gracefully until you add the file.
Nothing needs a code change; just drop a file at the exact path below
and refresh.

RESUME (nav bar "Resume" link)
---------------------------------
    public/resume.pdf

Opens in a new tab when someone clicks "Resume" in the nav. Any PDF
works - just name it exactly `resume.pdf`. Want a different filename?
Open src/data/content.ts, find hero.quickLinks, and change the
`href` on the Resume entry.


PROFILE PHOTO (Hero section)
-----------------------------
    public/profile.jpg

Shown at the top of the homepage. Any reasonably-sized photo works -
it's cropped to a portrait frame. Want a .png/.webp instead? Open
src/components/Hero/HeroPhoto.tsx and change the `src`.


PROJECT SCREENSHOTS (Projects section, full-width cover)
-----------------------------------------------------------
    public/images/projects/battery-management.png
    public/images/projects/fpga-cpu.png
    public/images/projects/air-quality-monitor.png
    public/images/projects/line-following-robot.png

A screenshot of the thing actually running - a dashboard, a waveform
capture, gameplay/demo footage as a GIF, an oscilloscope shot. Crops
to a fixed height and covers the full card width, so landscape (16:9
or wider) usually looks best. Change filenames via the `image` field
on each project in src/data/content.ts.


You can delete this file once everything's in place - it's just a
placeholder marker, not read by the app.
