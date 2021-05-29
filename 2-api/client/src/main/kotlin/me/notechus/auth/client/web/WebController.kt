package me.notechus.auth.client.web

import org.springframework.security.oauth2.client.OAuth2AuthorizedClient
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping


@Controller
@RequestMapping
class WebController(val authorizedClientService: OAuth2AuthorizedClientService) {

    @GetMapping("/")
    fun home(model: Model): String {
        return "index"
    }

    @GetMapping("/app/token")
    fun token(model: Model, authentication: OAuth2AuthenticationToken?): String {
        val authorizedClient: OAuth2AuthorizedClient =
            this.authorizedClientService.loadAuthorizedClient(
                authentication?.authorizedClientRegistrationId, authentication?.getName()
            )
        model.addAttribute("accessToken", authorizedClient.accessToken.tokenValue)
        model.addAttribute("refreshToken", authorizedClient.refreshToken?.tokenValue)
        return "show_token"
    }
}