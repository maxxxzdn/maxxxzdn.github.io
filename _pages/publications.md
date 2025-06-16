---
layout: page
permalink: /publications/
title: publications
description: up-to-date list with all my publications.
years: [2025, 2024, 2023, 2022]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

<!-- Single bibliography call with year-based ordering -->
{% bibliography -f papers --group_by year_ --group_order descending %}

</div>