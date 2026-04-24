@echo off
setlocal enabledelayedexpansion

:: Trabajar desde la carpeta donde está el .bat
cd /d "%~dp0"

echo Procesando carpetas...

call :procesar "%cd%"

echo.
echo ✅ Todo terminado
pause
exit /b

:procesar
for /d %%a in ("%~1\*") do (
    
    :: Primero entrar a subcarpetas
    call :procesar "%%a"
    
    :: Luego renombrar la carpeta actual
    set "nombre=%%~nxa"
    set "nuevo=!nombre: =_!"

    if not "!nombre!"=="!nuevo!" (
        echo Renombrando: "%%a" → "!nuevo!"
        ren "%%a" "!nuevo!"
    )
)

exit /b