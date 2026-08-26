# Resume PDF

Download Resume controls are omitted from the build until the real file exists.

Place the resume here with this exact name:

```text
public/assets/Anish-Kumar-Patel-Resume.pdf
```

`vite.config.ts` checks for that path at build time and sets `VITE_RESUME_AVAILABLE`.
When the file is present, the Download Resume button returns to the hero, the header
navigation, and the contact card.

Do not commit a placeholder PDF. After adding the real file, rebuild so it is copied
into `dist/assets/`.
