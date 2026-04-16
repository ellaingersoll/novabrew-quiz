# NovaBrew Coffee Taste Profile Quiz — Requirements

## Overview

A web-based personality quiz that matches coffee subscribers to their "coffee personality" and recommends specific NovaBrew coffees based on their results. The quiz should feel premium, warm, and personal while helping subscribers feel understood from the very first interaction.

## Personality Types

### Bold Explorer

Bold Explorer is intense, confident, and energized by strong experiences. This personality leans toward dark roasts, dramatic flavor, and a no-apologies coffee ritual. The result should feel powerful, adventurous, and decisive.

### Smooth Operator

Smooth Operator is polished, balanced, and effortlessly put together. This personality values consistency, elegance, and a coffee experience that feels refined without being overly serious. The result should feel calm, premium, and easy to trust.

### Cozy Classic

Cozy Classic is comfort-first and ritual-driven. This personality wants warmth, familiarity, softness, and a coffee experience that feels like home. The result should feel comforting, inviting, and emotionally grounded.

### Wild Card

Wild Card is curious, experimental, and drawn to surprise. This personality likes discovery, novelty, and experiences that feel fresh and a little unpredictable. The result should feel playful, creative, and open-ended.

## Coffee Pairings

- **Bold Explorer** → **Midnight Summit**
  Dark roast, smoky, bold, and high-intensity. This is the signature recommendation for subscribers who want depth, punch, and strong character.

- **Smooth Operator** → **Wildflower**
  Light roast with floral and fruity notes. This pairing gives Smooth Operator a clean, elegant recommendation that feels polished and distinctive.

- **Cozy Classic** → **Campfire Stories**
  Dark roast with s'mores, marshmallow, and graham notes. This pairing reinforces warmth, comfort, and a cozy ritual mood.

- **Wild Card** → **Off the Map**
  Experimental processing, funky fruit notes, and an unpredictable profile. This pairing is for the subscriber who actively wants surprise and novelty.

## Quiz Questions

### Question 1
**Your ideal Saturday morning starts with...**
- A) A strong first cup and a head start before the world catches up
- B) A slow, polished routine with good light and a playlist in the background
- C) A blanket, a pastry, and absolutely nowhere to be
- D) A spontaneous plan and wherever the day decides to take you

**Mapping**
- A = Bold Explorer
- B = Smooth Operator
- C = Cozy Classic
- D = Wild Card

### Question 2
**At a dinner party, your energy is closest to...**
- A) The confident one with strong opinions and great taste
- B) The calm one everyone gravitates toward
- C) The comforting one making people feel instantly at home
- D) The wildcard who always has the most unexpected story

**Mapping**
- A = Bold Explorer
- B = Smooth Operator
- C = Cozy Classic
- D = Wild Card

### Question 3
**If you could spend a weekend anywhere, you would choose...**
- A) A dramatic mountain cabin with crisp air and total focus
- B) A boutique hotel with perfect design and a city to explore
- C) A quiet lakeside cottage with cozy socks and a stack of books
- D) A place you have never been, with no itinerary and lots of surprises

**Mapping**
- A = Bold Explorer
- B = Smooth Operator
- C = Cozy Classic
- D = Wild Card

### Question 4
**Your friends would say your taste is...**
- A) Bold and unmistakable
- B) Refined and effortlessly good
- C) Warm, comforting, and familiar
- D) Unexpected and impossible to predict

**Mapping**
- A = Bold Explorer
- B = Smooth Operator
- C = Cozy Classic
- D = Wild Card

### Question 5
**When you walk into a cafe, you are most likely to...**
- A) Order the strongest thing on the menu without hesitation
- B) Pick something classic that you know will be excellent
- C) Look for whatever sounds comforting and cozy
- D) Ask what is new, strange, or unlike anything else

**Mapping**
- A = Bold Explorer
- B = Smooth Operator
- C = Cozy Classic
- D = Wild Card

### Question 6
**Your ideal brand makes you feel...**
- A) Powerful and energized
- B) Understood and well taken care of
- C) Warm, grounded, and relaxed
- D) Curious, inspired, and a little surprised

**Mapping**
- A = Bold Explorer
- B = Smooth Operator
- C = Cozy Classic
- D = Wild Card

### Question 7
**If your life had a soundtrack this week, it would be...**
- A) Driving, intense, and full of momentum
- B) Smooth, stylish, and balanced
- C) Soft, nostalgic, and comforting
- D) Eclectic, surprising, and impossible to pin down

**Mapping**
- A = Bold Explorer
- B = Smooth Operator
- C = Cozy Classic
- D = Wild Card

## Quiz Logic

- Each answer maps to one personality type
- Track a running tally across all questions
- At the end, show all four personality types as percentages based on answer distribution
- Highlight the top personality as the primary result
- Also show the secondary and tertiary percentages so the result feels nuanced and personalized

## Visual Style

The quiz should use a minimal, premium visual direction:

- clean, editorial layout with generous white space
- muted earth tones inspired by coffee, parchment, and natural materials
- polished typography that feels elevated but approachable
- subtle motion and smooth transitions between questions
- modern, calm, and premium rather than playful or overly dark
- overall feeling: specialty coffee brand meets high-end lifestyle product

## Extra Features

- **Images on results:** No for version one
- **Icons on answer options:** Yes
- Use small, tasteful icons next to answer choices to make the options easier to scan without overpowering the minimal design

## Technical Notes

- Built with Next.js + Tailwind CSS
- Single-page quiz experience with smooth transitions between questions
- Mobile-responsive and easy to use on phones
- Results page should feel polished and shareable
- Personality percentages should be clearly visualized
