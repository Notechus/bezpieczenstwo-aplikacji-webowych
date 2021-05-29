package me.notechus.auth.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/")
class HomeWebController {

    @GetMapping
    fun index(): String {
        return "index"
    }

    @GetMapping("/app/home")
    fun home(): String {
        return "app/home"
    }
}