package me.notechus.auth.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/app")
class ErrorWebController {

    @GetMapping("/403")
    fun error403(): String = "errors/403"

    @GetMapping("/404")
    fun error404(): String = "errors/404"
}