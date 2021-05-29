package me.notechus.auth.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/admin/sessions")
class SessionWebController {

    @GetMapping
    fun sessions(): String {
        return "admin/sessions"
    }
}