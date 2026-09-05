Real screenshots/GIFs that demonstrate each project — already wired up
in src/data/content.ts (the `image` field on each project entry) and
rendered in ProjectCard. Add files here with these exact names and
they'll show up automatically, replacing the placeholder illustration
for that project:

    public/images/projects/battery-management.png
    public/images/projects/fpga-cpu.png
    public/images/projects/air-quality-monitor.png
    public/images/projects/line-following-robot.png

A screenshot of the thing actually running is what to use here — a
dashboard, a waveform capture, gameplay/demo footage as a GIF, an
oscilloscope shot, whatever best proves the project works. The cover
crops to a fixed height (240px) and covers the full card width, so a
roughly 16:9 or wider image usually looks best. Until a file exists at
one of these paths, that project keeps showing its placeholder
illustration — nothing breaks either way.

Want a different filename, or an animated .gif instead of .png? Open
src/data/content.ts, find that project's `image` field, and change the
path there.

You can delete this .txt file once you've added your screenshots —
it's just a placeholder marker, not read by the app.
