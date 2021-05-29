package me.notechus.auth.model

import java.time.LocalDateTime

class UserProfile(
    val id: String,
    val firstName: String,
    val lastName: String,
    val description: String,
    val email: String,
    val imageUrl: String?,
    val phone: String?,
    val address: String?,
    val website: String?,
    val instagramUsername: String?,
    val facebookUsername: String?,
    val twitterUsername: String?,
    val createdAt: LocalDateTime
)