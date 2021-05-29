package me.notechus.auth.web

import me.notechus.auth.model.Article
import me.notechus.auth.service.ArticleService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.core.userdetails.User
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.mvc.support.RedirectAttributes

@Controller
@RequestMapping("/app/articles")
class ArticleWebController(val articleService: ArticleService) {
    var counter = 4 // TODO: this is not a well thought implementation

    @GetMapping
    @PreAuthorize("hasRole('USER') || hasRole('ADMIN')")
    fun find(
        @RequestParam("username", required = false) username: String?,
        model: Model,
        @AuthenticationPrincipal user: User
    ): String {
        if (username != null && username != user.username && !user.authorities.map { it.authority }
                .contains("ROLE_ADMIN")) {
            return "redirect:/app/403"
        }

        val selectedUser = username ?: user.username
        println("Getting articles for $selectedUser")
        val articles = articleService.findByUsername(selectedUser)

        println("Found ${articles.size} articles for $selectedUser")
        model.addAttribute("articles", articles)
        model.addAttribute("username", selectedUser)
        return "app/articles"
    }

    @GetMapping("/{id}")
    @PreAuthorize("(hasRole('USER') && @articleOwnershipChecker.hasOwnership(#id, authentication)) || hasRole('ADMIN')")
    fun findOne(@PathVariable("id") id: Int, model: Model): String {

        val article = articleService.findOne(id)
        model.addAttribute("article", article)

        if (article != null) {
            return "app/single-article"
        }

        return "redirect:/app/404"

    }

    @PostMapping
    @PreAuthorize("hasRole('USER')")
    fun create(@RequestBody article: Article, redirectAttributes: RedirectAttributes): String {
        val id = counter++
        articleService.createArticle(id, article)

        return "redirect:/app/articles/$id"
    }

    @PostMapping("/{id}/update")
    @PreAuthorize(" articleOwnershipChecker.hasOwnership(#id, authentication) || hasRole('MODERATOR') || hasRole('USER')")
    fun update(@PathVariable("id") id: Int, @RequestBody article: Article): String {
        articleService.updateArticle(article)

        // TODO: add updated article as attribute and redirect to the single article URL

        return "redirect:/app/articles"
    }

    @PostMapping("/{id}/delete")
    @PreAuthorize("articleOwnershipChecker.hasOwnership(#id,authentication) || hasRole('ADMIN')")
    fun delete(@PathVariable("id") id: Int): String {
        articleService.deleteArticle(id)

        return "redirect:/app/articles"
    }
}