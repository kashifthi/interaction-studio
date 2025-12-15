# Academic Portfolio Redesign Specification

## 1. Navigation & Theming (The "Triple Toggle")
* [cite_start]Create a top navigation bar[cite: 3].
* [cite_start]**The Theme Toggle:** Instead of a simple click, create a hover-triggered dropdown menu on the theme icon[cite: 4, 5].
* [cite_start]The dropdown must offer three specific options[cite: 6]:
    1.  [cite_start]**Light Mode** (Standard white background, dark text)[cite: 7].
    2.  [cite_start]**Dark Mode** (Dark gray background, white text)[cite: 8].
    3.  [cite_start]**"Teal & Sand" Mode** (A custom brand theme using deep teal for backgrounds and sand/gold for accents)[cite: 9, 10].
* [cite_start]Ensure the chosen theme persists using local storage[cite: 11].

## 2. Hero Section (Home Page)
* [cite_start]**Layout:** Split layout (Text Left, Image Right)[cite: 13].
* **Text:**
    * [cite_start]**Title:** "Designing the Future of Interaction"[cite: 15].
    * [cite_start]**Subtitle:** "UX Researcher & PhD Candidate specializing in Human-Computer Interaction."[cite: 17].
    * **CTA Button:** Label it "Download Resume". [cite_start]It must link to: `https://kashif-iqbal.com/assets/Resume-Iqbal.pdf` (open in new tab)[cite: 18, 19].
* [cite_start]**Image:** On the right, use a placeholder image from Unsplash representing a "confident male student in a modern library" (or generate a UI placeholder)[cite: 20, 21].

## 3. The "Resume" Page (Multimodal)
* [cite_start]Add "Resume" to the navbar[cite: 23].
* [cite_start]**Audio Feature:** At the very top of the page, add a sticky "Listen to Resume" player (Play/Pause/Speed controls)[cite: 24].
* [cite_start]**Functionality:** Use the Web Speech API (Text-to-Speech) to actually read the content of the resume out loud when the user clicks play[cite: 25].
* [cite_start]**Content:** Display a structured, semantic HTML version of a standard UX Researcher resume (Experience, Education, Skills) below the player[cite: 26].

## 4. The "Case Study" Page (Storybook Style)
* [cite_start]Add "Case Study" to the navbar[cite: 28].
* **Format:** Do not make this a vertical scroll. [cite_start]Make it a "Storybook" pagination experience[cite: 29].
* [cite_start]**UI:** Show one "chapter" at a time with "Previous" and "Next" buttons at the bottom[cite: 30]. [cite_start]Add a progress bar (e.g., "Page 1 of 5")[cite: 31].
* [cite_start]**Content:** Auto-generate a mock UX case study titled "Redesigning Fintech for Seniors."[cite: 32].
    * [cite_start]Page 1: Overview & Problem[cite: 33].
    * [cite_start]Page 2: User Research (Interviewing seniors)[cite: 34].
    * [cite_start]Page 3: Sketches & Ideation[cite: 35].
    * [cite_start]Page 4: High Fidelity UI[cite: 36].
    * [cite_start]Page 5: Outcomes & Metrics[cite: 37].

## Design Aesthetic
* [cite_start]Use a clean font (Inter or system-sans)[cite: 39].
* [cite_start]Ensure high accessibility contrast in all 3 themes[cite: 40].
* [cite_start]Make it mobile responsive[cite: 40].
