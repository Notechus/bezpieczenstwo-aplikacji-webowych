package me.notechus.auth.client.web

import me.notechus.auth.client.api.BooksApiClient
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping


@Controller
@RequestMapping("/app/books")
class BooksController(val authorizedClientService: OAuth2AuthorizedClientService, val booksApi: BooksApiClient) {

    @GetMapping
    fun allBooks(model: Model, authentication: OAuth2AuthenticationToken): String {
        val books = booksApi.getBooks(authentication.name)
        print("got books ${books?.size}")

        model.addAttribute("books", books)

        return "books"
    }
}