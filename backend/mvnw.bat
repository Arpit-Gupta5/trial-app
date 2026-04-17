@echo off
setlocal enabledelayedexpansion

REM Find Java
set MAVEN_JAVA_EXE=java

REM Check JAVA_HOME first
if not "%JAVA_HOME%"=="" (
    if exist "%JAVA_HOME%\bin\java.exe" (
        set MAVEN_JAVA_EXE=%JAVA_HOME%\bin\java.exe
    )
)

REM Download Maven if not present
if not exist ".mvn\wrapper\maven-wrapper.jar" (
    echo Downloading Maven wrapper...
    powershell -NoProfile -Command "(New-Object Net.WebClient).DownloadFile('https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper-3.2.0.jar', '.mvn\wrapper\maven-wrapper.jar')"
)

REM Run Maven with required properties
%MAVEN_JAVA_EXE% -classpath ".mvn\wrapper\maven-wrapper.jar" "-Dmaven.multiModuleProjectDirectory=%cd%" org.apache.maven.wrapper.MavenWrapperMain %*

endlocal
