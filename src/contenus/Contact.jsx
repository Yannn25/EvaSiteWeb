import { useState, useRef } from 'react';
import '../styles/contact.css';

// Composant Input avec label flottant
const FloatingInput = ({ 
    name, 
    type = 'text', 
    label, 
    value,
    onChange,
    onFocus,
    onBlur,
    isTextarea = false,
    disabled = false,
    error = null,
    isFocused = false
}) => {
    const hasValue = value && value.trim() !== '';
    const hasError = error;

    const inputProps = {
        id: name,
        name: name,
        value: value,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        className: `form-input ${hasError ? 'error' : ''} ${hasValue ? 'has-value' : ''}`,
        disabled: disabled
    };

    return (
        <div className='input-group'>
            {isTextarea ? (
                <textarea {...inputProps} />
            ) : (
                <input type={type} {...inputProps} />
            )}
            
            <label 
                htmlFor={name} 
                className={`form-label ${(isFocused || hasValue) ? 'active' : ''} ${hasError ? 'error' : ''}`}
            >
                {label}
            </label>
            
            {hasError && (
                <span className="error-message">{hasError}</span>
            )}
            
            {!hasError && hasValue && (
                <i className="fa-solid fa-check validation-icon success"></i>
            )}
        </div>
    );
};

// Composant Select avec label flottant
const FloatingSelect = ({ 
    name, 
    label, 
    value,
    onChange,
    onFocus,
    onBlur,
    options = [],
    disabled = false,
    error = null,
    isFocused = false
}) => {
    const hasValue = value && value.trim() !== '';
    const hasError = error;

    return (
        <div className='input-group'>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={`form-input form-select ${hasError ? 'error' : ''} ${hasValue ? 'has-value' : ''}`}
                disabled={disabled}
            >
                <option value="" disabled></option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            
            <label 
                htmlFor={name} 
                className={`form-label ${(isFocused || hasValue) ? 'active' : ''} ${hasError ? 'error' : ''}`}
            >
                {label}
            </label>
            
            {hasError && (
                <span className="error-message">{hasError}</span>
            )}
            
            {/* SUPPRIMÉ : L'icône de validation n'est plus affichée pour les selects */}
        </div>
    );
};

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        customSubject: '', // Nouveau champ pour le sujet personnalisé
        message: ''
    });

    const [focusedField, setFocusedField] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    // Options pour la liste déroulante des sujets
    const subjectOptions = [
        { value: 'question', label: 'Question générale' },
        { value: 'collaboration', label: 'Proposition de collaboration' },
        { value: 'bug', label: 'Signaler un bug' },
        { value: 'feedback', label: 'Retour d\'expérience' },
        { value: 'business', label: 'Opportunité business' },
        { value: 'support', label: 'Demande de support' },
        { value: 'other', label: 'Autre (à préciser)' }
    ];

    // Gestion des changements de champs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Si on change le sujet et que ce n'est pas "other", on vide le sujet personnalisé
        if (name === 'subject' && value !== 'other') {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                customSubject: ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }

        // Validation en temps réel
        if (errors[name]) {
            validateField(name, value);
        }
    };

    // Gestion du focus sur les champs
    const handleFocus = (fieldName) => {
        setFocusedField(fieldName);
    }

    const handleBlur = (fieldName) => {
        setFocusedField(null);
        validateField(fieldName, formData[fieldName]);
    };

    // Validation des champs - MISE À JOUR pour gérer le sujet
    const validateField = (fieldName, value) => {
        const newErrors = { ...errors };

        switch (fieldName) {
            case 'name':
                if (!value.trim()) {
                    newErrors.name = 'Le nom est requis.';
                } else if(value.trim().length < 2) {
                    newErrors.name = 'Le nom doit comporter au moins 2 caractères.';
                } else {
                    delete newErrors.name;
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    newErrors.email = 'L\'email est requis.';
                } else if (!emailRegex.test(value)) {
                    newErrors.email = 'L\'email n\'est pas valide.';
                } else {
                    delete newErrors.email;
                }
                break;
            
            case 'subject':
                if (!value.trim()) {
                    newErrors.subject = 'Le sujet est requis.';
                } else {
                    delete newErrors.subject;
                    // Si "Autre" est sélectionné, valider aussi le sujet personnalisé
                    if (value === 'other') {
                        validateField('customSubject', formData.customSubject);
                    }
                }
                break;

            case 'customSubject':
                // Validation du sujet personnalisé seulement si "Autre" est sélectionné
                if (formData.subject === 'other') {
                    if (!value.trim()) {
                        newErrors.customSubject = 'Veuillez préciser le sujet.';
                    } else if(value.trim().length < 3) {
                        newErrors.customSubject = 'Le sujet doit comporter au moins 3 caractères.';
                    } else {
                        delete newErrors.customSubject;
                    }
                } else {
                    delete newErrors.customSubject;
                }
                break;

            case 'message':
                if (!value.trim()) {
                    newErrors.message = 'Le message est requis.';
                } else if(value.trim().length < 10) {
                    newErrors.message = 'Le message doit comporter au moins 10 caractères.';
                } else {
                    delete newErrors.message;
                }
                break;
            
            default:
                break;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //Validation complète du formulaire
    const validateForm = () => {
        const fieldsNames = ['name', 'email', 'subject', 'message'];
        
        // Ajouter customSubject à la validation si "Autre" est sélectionné
        if (formData.subject === 'other') {
            fieldsNames.push('customSubject');
        }
        
        let isValid = true;
        fieldsNames.forEach(fieldName => {
            if (!validateField(fieldName, formData[fieldName])) {
                isValid = false;
            }
        });
        return isValid;
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!validateForm()) {
            // Animation de secousse pour indiquer les erreurs
            formRef.current.classList.add('shake');
            setTimeout(() => {
                formRef.current?.classList.remove('shake');
            }, 600);
            return;
        }

        setIsSubmitting(true);

        try {
            // Préparer les données à envoyer
            const dataToSend = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject === 'other' ? formData.customSubject : 
                         subjectOptions.find(opt => opt.value === formData.subject)?.label,
                message: formData.message
            };

            console.log('Données à envoyer:', dataToSend);

            // Simulation d'envoi - remplacez par votre logique d'envoi
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Succès
            alert('Message envoyé avec succès !');
            setFormData({ name: '', email: '', subject: '', customSubject: '', message: '' });
            setErrors({});
        } catch (error) {
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-wrapper">
            <div className="container">
                <h2 className="contact-title">Get In Touch</h2>
                <div className="form-container">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <FloatingInput
                            name="name"
                            label="Nom complet"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                            disabled={isSubmitting}
                            error={errors.name}
                            isFocused={focusedField === 'name'}
                        />
                        
                        <FloatingInput
                            type="email"
                            name="email"
                            label="Adresse email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email')}
                            disabled={isSubmitting}
                            error={errors.email}
                            isFocused={focusedField === 'email'}
                        />
                        
                        <FloatingSelect
                            name="subject"
                            label="Sujet"
                            value={formData.subject}
                            options={subjectOptions}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('subject')}
                            onBlur={() => handleBlur('subject')}
                            disabled={isSubmitting}
                            error={errors.subject}
                            isFocused={focusedField === 'subject'}
                        />

                        {/* Champ conditionnel pour le sujet personnalisé */}
                        {formData.subject === 'other' && (
                            <FloatingInput
                                name="customSubject"
                                label="Précisez le sujet"
                                value={formData.customSubject}
                                onChange={handleInputChange}
                                onFocus={() => handleFocus('customSubject')}
                                onBlur={() => handleBlur('customSubject')}
                                disabled={isSubmitting}
                                error={errors.customSubject}
                                isFocused={focusedField === 'customSubject'}
                            />
                        )}
                        
                        <FloatingInput
                            name="message"
                            label="Votre message"
                            value={formData.message}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('message')}
                            onBlur={() => handleBlur('message')}
                            disabled={isSubmitting}
                            error={errors.message}
                            isFocused={focusedField === 'message'}
                            isTextarea={true}
                        />
                        
                        <button 
                            type="submit" 
                            className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                    <span className="button-text">Envoi en cours...</span>
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-paper-plane"></i>
                                    <span className="button-text">Envoyer le message</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};