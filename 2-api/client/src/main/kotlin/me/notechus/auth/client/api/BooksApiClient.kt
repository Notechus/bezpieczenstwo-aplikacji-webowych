package me.notechus.auth.client.api

import me.notechus.auth.client.models.Book
import org.springframework.beans.factory.annotation.Value
import org.springframework.core.ParameterizedTypeReference
import org.springframework.stereotype.Service
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToFlux
import java.net.URI

@Service
class BooksApiClient(
    val webClient: WebClient,
    @Value("\${books.api.url}") private val booksApiUrl: String
) {

    fun getBooks(userId: String): MutableList<Book>? {
        return this.webClient
            .get()
            .uri(URI("$booksApiUrl?user=$userId"))
            .retrieve()
            .bodyToFlux<Book>()
            .log()
            .collectList()
            .block()
    }
}