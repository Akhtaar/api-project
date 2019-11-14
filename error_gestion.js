exports.login_donne_manquante_401 = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'email/password est manquant"
    }
)

exports.login_trop_de_tentative_sur_mail_409 = (res) => (
    res,
    status = 409,
    data = {
        error: true,
        message: "Trop de tentative sur l'email " + data.email + "- Veuillez patientez 3min"
    }
)

exports.login_passw_email_error_401 = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "Votre email/password est erroné"
    }
)

exports.register_donne_manquante_401 = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'une ou plusieurs des données obligatoire sont manquantes"
    }
)

exports.register_donne_non_conforme_401 = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'une des données obligatoire ne sont pas conformes"
    }
)

exports.register_email_exist_401 = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "Votre email n'est pas correct"
    }
)

exports.user_id_donne_format_errone_401 = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'id envoyez n'est pas conforme"
    }
)

exports.user_id_donne_valide_401 = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'id envoyez n'existe pas "
    }
)


exports.school_register_nom_existe_401 = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "Le name déjà utilisé"
    }
)

exports.data_vide = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "Aucune données n'a été envoyée"
    }
)

exports.param_error = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "L'un des paramètre n'ai pas correct"
    }
)

exports.maximum_etudiant = (res) => (
    res,
    status = 401,
    data = {
        error: true,
        message: "Le nombre d'étudiant maximum est atteints"
    }
)