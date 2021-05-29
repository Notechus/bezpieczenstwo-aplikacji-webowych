package me.notechus.auth.check

import me.notechus.auth.service.ArticleService
import org.springframework.http.HttpStatus
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Component
import org.springframework.web.client.HttpClientErrorException

@Component
class ArticleOwnershipChecker(val articleService: ArticleService) {

    fun hasOwnership(articleId: Int, authentication: Authentication): Boolean {
        return articleService.findOne(articleId)?.let { it.owner == authentication.name } ?: false
    }
}