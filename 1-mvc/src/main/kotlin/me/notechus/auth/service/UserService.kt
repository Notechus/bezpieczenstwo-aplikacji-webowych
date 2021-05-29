package me.notechus.auth.service

import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserService : UserDetailsService {

    private val users =
        mutableMapOf(
            Pair(
                "john", User.withDefaultPasswordEncoder()
                    .username("john")
                    .password("password")
                    .roles("USER")
                    .build()
            ),
            Pair(
                "mary", User.withDefaultPasswordEncoder()
                    .username("mary")
                    .password("mary5")
                    .roles("USER", "MODERATOR")
                    .build()
            ),
            Pair(
                "adam", User.withDefaultPasswordEncoder()
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