package me.notechus.auth.service

import me.notechus.auth.model.Article
import me.notechus.auth.model.UserProfile
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class UserProfileService {

    private val profiles =
        mutableMapOf(
            Pair(
                "john",
                UserProfile(
                    "john",
                    "John",
                    "Doe",
                    "I like trains and outdoors activities!",
                    "john.doe@company.com",
                    "https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/face-3.62232de2.jpg",
                    "+48 111 222 333",
                    "Bay Area, San Francisco, CA",
                    "blog.doe.com",
                    "jode",
                    "jode",
                    "jodo",
                    LocalDateTime.now()
                )
            ),
            Pair(
                "mary",
                UserProfile(
                    "mary",
                    "Mary",
                    "Poppins",
                    "No one knows that I've wanted to become a florist",
                    "mary.poppins@company.com",
                    "https://demos.creative-tim.com/material-dashboard-pro-react/static/media/avatar.6ea8c10a.jpg",
                    "+33 5879 99 8877",
                    "Porsche One, Atlanta, GA",
                    "daily-recipes.com",
                    "maryann",
                    "nicemary",
                    null,
                    LocalDateTime.now()
                )
            ),
            Pair(
                "adam",
                UserProfile(
                    "adam",
                    "Adam",
                    "Bender",
                    "I'm a security freak",
                    "adam.bender@company.com",
                    "https://demos.creative-tim.com/material-dashboard-pro-react/static/media/marc.5d8f9145.jpg",
                    "[CLASSIFIED]",
                    "[CLASSIFIED]",
                    "-",
                    "badam",
                    "badam",
                    "bend",
                    LocalDateTime.now()
                )
            )
        )

    fun findOne(id: String): UserProfile? = profiles[id]

    fun getAll() = profiles
}