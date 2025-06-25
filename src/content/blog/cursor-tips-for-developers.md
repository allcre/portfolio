---
title: "Cursor tips that changed how I code for personal projects"
description: "Essential Cursor features and workflows that transformed my development process, with examples from building personal websites and side projects."
icon: "💻"
pubDate: "Jan 15 2025"
heroImage: "/src/assets/coding-cursor.jpg"
---

There are a lot of new AI tools out there, and after experimenting with what's available for my personal projects, here's what I've found makes the most difference in my day-to-day development work:

## What I use every day

### AI-powered development tools

While there are many AI coding assistants available, I've found that integrating the right tools into my workflow makes a huge difference. For personal website development, I particularly value tools that can:

- Read and understand project structure and dependencies
- Help with debugging across different frameworks (like Astro, React, or vanilla JS)
- Assist with CSS/Tailwind styling and responsive design
- Review code for best practices and performance optimizations

When I'm getting started on a new feature or fixing a bug, I'll describe the issue to my AI assistant and let it help analyze the codebase. When I'm in the review stage of my work, AI can help spot potential issues and suggest improvements.

### @ Symbols for Context

Cursor's [@-symbols](https://docs.cursor.com/context/@-symbols) are incredibly useful for giving AI the exact context it needs.

**`@Files` and `@Folders`**

Gives Cursor specific files or folders as context. I enabled `Include Full-Folder Context` in Cursor's settings, which includes the full contents of the folder in the context. Files and folders can also be dragged and dropped into the chat window.

Using `/Add open files to context` in the chat window is a great shortcut to include multiple files as context.

**`@Git`: `@Commit` and `@Branch`**

These commands give Cursor a diff as context, which is useful for showing it the work I've done so far, or reviewing changes before pushing. After the branch or commit context is added, I find it useful to hover over the context pill in the chat to make sure the diff looks right.

From my experience, `@Commit` excludes staged files, and `@Branch` compares your branch with the local main branch, so if it's not up to date the diff won't be accurate.

**`@Docs`**

Cursor has pre-scraped many public docs to use as context for your projects. When I worked on building my Astro-based personal website, adding the Astro docs as context was incredibly helpful for understanding component patterns and best practices.

You can add documentation for any frameworks or libraries you're using in Cursor's settings. Some commonly useful docs for personal website development include:

- Astro: [docs.astro.build](https://docs.astro.build)
- React: [react.dev](https://react.dev)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- MDX: [mdxjs.com](https://mdxjs.com)

### Custom Cursor rules

Reading the [Cursor rules docs](https://docs.cursor.com/context/rules) is a great way to see all the ways you can leverage different types of rules, and apply rules to specific projects or files. You can create project-specific rules that help maintain consistency across your codebase.

I recommend everyone have a user rule. Here's an example of what I use for personal projects:

```
You are an expert full-stack developer helping with personal website and project development.

Always:
- Write clean, readable, and well-documented code
- Follow modern best practices for web development
- Prioritize accessibility and performance
- Use semantic HTML and proper CSS structure
- Consider mobile-first responsive design
- Suggest improvements for SEO and user experience

For TypeScript/JavaScript:
- Use TypeScript when possible
- Follow functional programming patterns where appropriate
- Write descriptive variable and function names

For CSS/Styling:
- Use Tailwind CSS classes when available
- Ensure proper contrast ratios and accessibility
- Optimize for different screen sizes

Always explain your reasoning for architectural decisions.
```

### Use the best models

Use the best and newest model for coding, not auto. Different models excel at different tasks, but I default to Claude Sonnet or the latest available model with high reasoning capabilities for complex development tasks.

### Fresh chat strategy

When Cursor gets stuck or confused, start a new chat instead of fighting with it. This often happens because the AI reaches its context window limit. You can always reference your previous conversation with `@Chat` if you need to pull context from earlier discussions. If you want to keep your previous chat going, you can open a second chat tab with `⌘t`.

## What I'm currently adopting

### Cursor Notepads

[Cursor notepads](https://docs.cursor.com/beta/notepads) let you consolidate context in one place, which can then be referenced by the agent. I'm experimenting with including:

- Feature requirements and design constraints
- Relevant code patterns from other parts of the project
- Performance considerations
- Accessibility requirements

This seems like a powerful tool for feature-specific context. More general context should probably be stored in a rule.

### Using better AI instructions, in more places

I want to continuously iterate on reusable instruction templates for my agent and strategically place them across Cursor's features. My goal is to build a collection of instructions organized by project and task:

- **In my user rule**: Core instructions that shape how the agent responds across all projects
- **In custom rules**: Context-specific instructions that automatically apply to certain file types (e.g., extra attention to accessibility in component files)
- **In notepads**: Task-specific instructions I can quickly reference for complex features

This way, I can quickly access the right instructions for the task at hand.

## Putting it all together

Here's an example of how I might approach adding a new blog post feature to my personal website:

1. **Context setup**: Use `@Folders` to include my blog components and content structure
2. **Documentation**: Add `@Docs` for Astro and MDX to understand content processing
3. **Git context**: Use `@Branch` to show current progress
4. **Notepad**: Create a notepad with feature requirements:
   ```
   New blog post feature requirements:
   - Support for MDX content with code syntax highlighting
   - Responsive design that works on mobile and desktop
   - SEO-friendly with proper meta tags
   - Reading time estimation
   - Related posts suggestions
   - Accessible navigation between posts
   ```

## Final thoughts

It can be very overwhelming to stay up to date with the new AI features. My approach to adopting them is to focus on one feature at a time, and try to make it work for my development workflow. If it doesn't immediately click, that's fine. But once I'm comfortable with a tool, it actually changes how I approach building personal projects for the better.

The key is finding the right balance between AI assistance and maintaining a deep understanding of your codebase and the technologies you're using. AI should enhance your development process, not replace your understanding of the fundamentals.