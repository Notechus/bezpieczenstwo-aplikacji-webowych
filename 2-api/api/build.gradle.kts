import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.5.0"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    kotlin("jvm") version "1.5.10"
    kotlin("plugin.spring") version "1.5.10"
}

group = "me.notechus.auth"
version = "0.0.1"
java.sourceCompatibility = JavaVersion.VERSION_16

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-oauth2-resource-server")
    implementation("org.springframework.security.oauth:spring-security-oauth2:2.5.1.RELEASE")
    implementation("org.springframework.security.oauth.boot:spring-security-oauth2-autoconfigure:2.5.0")
//    implementation("org.springframework.security:spring-security-oauth2-resource-server")
//    implementation("com.nimbusds:oauth2-oidc-sdk:9.7")


    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    testImplementation("org.springframework.boot:spring-boot-starter-test")

    implementation("jakarta.xml.bind:jakarta.xml.bind-api:2.3.2")
    implementation("org.glassfish.jaxb:jaxb-runtime:2.3.2")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "11"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
