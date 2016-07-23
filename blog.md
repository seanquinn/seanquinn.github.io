---
layout: page
---

<div class="posts">
  {% for post in site.posts %}
  <div class="post-tagline">
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <span class="post-date">{{ post.date | date_to_string }}</span>
  </div>
  {% endfor %}
</div>