package me.notechus.auth.api

import me.notechus.auth.models.Book
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/books")
class BooksController {

    @GetMapping
    fun getBooks(@RequestParam("user") user: String): List<Book> {
        return listOf(
            Book("Harry Potter", "J.K. Rowling", user),
            Book("Python for Dummies", "XYZ", user),
            Book("Lord of the Rings", "J.R.R. Tolkien", user),
        )
    }
}