package me.notechus.auth.service

import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class UserService(passwordEncoder: PasswordEncoder) : UserDetailsService {

    private val users: MutableMap<String, UserDetails> = mutableMapOf(
        Pair(
            "john", User.builder()
                .username("john")
                .password(passwordEncoder.encode("password"))
                .roles("USER")
                .build()
        ),
        Pair(
            "mary", User.builder()
                .username("mary")
                .password("mary5")
                .roles("USER", "MODERATOR")
                .build()
        ),
        Pair(
            "adam", User.builder()
                .username("adam")
                .password("hard-password")
                .roles("ADMIN", "USER")
                .build()
        )
    )

    override fun loadUserByUsername(username: String?): UserDetails {
        return username?.let {
            users[it]
        } ?: run {
            throw UsernameNotFoundException(username)
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    fun getAll(): List<UserDetails> {
        return users.values.toList()
    }
}