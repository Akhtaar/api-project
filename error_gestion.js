const login_donne_manquante_401 = (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'email/password est manquant"
    }
)

const login_trop_de_tentative_sur_mail_409 = (
    res,
    status = 409,
    data = {
        error: true,
        message: "Trop de tentative sur l'email " + data.email + "- Veuillez patientez 3min"
    }
)

const login_passw_email_error_401 = (
    res,
    status = 401,
    data = {
        error: true,
        message: "Votre email/password est erroné"
    }
)

const register_donne_manquante_401 = (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'une ou plusieurs des données obligatoire sont manquantes"
    }
)

const register_donne_non_conforme_401 = (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'une des données obligatoire ne sont pas conformes"
    }
)

const register_email_exist_401 = (
    res,
    status = 401,
    data = {
        error: true,
        message: "Votre email n'est pas correct"
    }
)

const user_id_donne_format_errone_401 = (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'id envoyez n'est pas conforme"
    }
)

const user_id_donne_valide_401 = (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'id envoyez n'existe pas "
    }
)


const school_register_nom_existe_401 = (
    res,
    status = 401,
    data = {
        error: true,
        message: "Le name déjà utilisé"
    }
)

const data_vide = (
    res,
    status = 401,
    data = {
        error: true,
        message: "Aucune données n'a été envoyée"
    }
)

const param_error = (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'un des paramètre n'ai pas correct"
    }
)

const maximum_etudiant = (
    res,
    status = 401,
    data = {
        error: true,
        message: "Le nombre d'étudiant maximum est atteints"
    }
)