@echo off
setlocal enabledelayedexpansion

:: Ir a la carpeta donde está el .bat
cd /d "%~dp0"

for /d %%a in (*) do (
    set "nombre=%%a"
    set "nuevo=!nombre: =_!"

    if not "!nombre!"=="!nuevo!" (
        ren "%%a" "!nuevo!"
    )
)

echo Listo.
pause