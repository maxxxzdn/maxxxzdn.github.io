---
layout: page
permalink: /publications/
title: publications
description: up-to-date list with all my publications.
years: [2024, 2023, 2022]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year_={{y}}]* %}
{% endfor %}

</div>
