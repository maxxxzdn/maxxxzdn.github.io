---
layout: page
permalink: /repositories/
title: repositories
description: a list of relevant repositories which I have contributed to.
nav: true
nav_order: 3
---
<style>
  .grey-block {
    background-color: grey; /* or any shade of grey you prefer */
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>

{% if site.data.repositories.github_repos %}
<div class="repositories grey-block d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    <div class="grey-block">
      {% include repository/repo.html repository=repo %}
    </div>
  {% endfor %}
</div>
{% endif %}
<br>

{% if false %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.html username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
  {% if site.data.repositories.github_users.size > 1 %}
  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.html username=user %}
  </div>

  ---

{% endfor %}
{% endif %}
{% endif %}
