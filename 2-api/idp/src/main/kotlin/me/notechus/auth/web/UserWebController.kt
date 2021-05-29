package me.notechus.auth.web

import me.notechus.auth.service.UserProfileService
import me.notechus.auth.service.UserService
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/admin/users")
class UserWebController(val userService: UserService, val userProfileService: UserProfileService) {

    @GetMapping("/{username}")
    @PreAuthorize("hasRole('ADMIN')")
    fun findBy(@PathVariable("username") username: String, model: Model): String {
        val user = userService.loadUserByUsername(username)
        val profile = userProfileService.findOne(username)
        model.addAttribute("user", user)
        model.addAttribute("profile", profile)

        return "admin/single-user"
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    fun findAll(model: Model): String {
        val users = userService.getAll()
        val profileImages = userProfileService.getAll().mapValues { it.value.imageUrl }
        model.addAttribute("users", users)
        model.addAttribute("profileImages", profileImages)

        return "admin/users"
    }

    @GetMapping("{username}/edit")
    fun edit(@PathVariable("username") username: String, model: Model): String {
        return "redirect:/admin/users/${username}"
    }

    @GetMapping("{username}/delete")
    fun delete(@PathVariable("username") username: String, model: Model): String {
        return "redirect:/admin/users/${username}"
    }
}