package me.notechus.auth.model

import java.time.LocalDateTime

class Article(
    val id: Int,
    val title: String,
    val content: String,
    val category: String,
    val teaser: String,
    val owner: String,
    val createdAt: LocalDateTime
)