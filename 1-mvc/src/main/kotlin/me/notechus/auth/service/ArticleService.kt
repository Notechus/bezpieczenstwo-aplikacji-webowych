package me.notechus.auth.service

import me.notechus.auth.model.Article
import org.springframework.http.HttpStatus
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.userdetails.User
import org.springframework.stereotype.Service
import org.springframework.web.client.HttpClientErrorException
import java.time.LocalDateTime

@Service
class ArticleService {

    private val articles =
        mutableMapOf(
            Pair(
                1,
                Article(1, "Post1", "much content", "World", "This is article teaser", "john", LocalDateTime.now())
            ),
            Pair(
                2,
                Article(2, "Post2", "much content", "Fashion", "This is article teaser", "john", LocalDateTime.now())
            ),
            Pair(
                3,
                Article(3, "Post3", "much content", "Sport", "This is article teaser", "mary", LocalDateTime.now())
            )
        )

    fun findOne(id: Int): Article? = articles[id]

    fun findByUsername(username: String) = articles.filter { it.value.owner == username }.values

    fun createArticle(id: Int, article: Article) = articles.put(article.id, article)

    fun updateArticle(article: Article) = articles.put(article.id, article)

    fun deleteArticle(id: Int) = articles.remove(id)
}