'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pfe-insat documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-359e7600115ff9ec722a63fa37d0e0a2"' : 'data-target="#xs-controllers-links-module-AuthModule-359e7600115ff9ec722a63fa37d0e0a2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-359e7600115ff9ec722a63fa37d0e0a2"' :
                                            'id="xs-controllers-links-module-AuthModule-359e7600115ff9ec722a63fa37d0e0a2"' }>
                                            <li class="link">
                                                <a href="controllers/AdminAuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminAuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/EntrepriseAuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntrepriseAuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ProfessorAuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfessorAuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/StudentAuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentAuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-359e7600115ff9ec722a63fa37d0e0a2"' : 'data-target="#xs-injectables-links-module-AuthModule-359e7600115ff9ec722a63fa37d0e0a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-359e7600115ff9ec722a63fa37d0e0a2"' :
                                        'id="xs-injectables-links-module-AuthModule-359e7600115ff9ec722a63fa37d0e0a2"' }>
                                        <li class="link">
                                            <a href="injectables/AdminAuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AdminAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntrepriseAuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EntrepriseAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfessorAuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProfessorAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentAuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StudentAuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EntrepriseModule.html" data-type="entity-link">EntrepriseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EntrepriseModule-f37448d5bc3d91a81e59c7d488939370"' : 'data-target="#xs-controllers-links-module-EntrepriseModule-f37448d5bc3d91a81e59c7d488939370"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EntrepriseModule-f37448d5bc3d91a81e59c7d488939370"' :
                                            'id="xs-controllers-links-module-EntrepriseModule-f37448d5bc3d91a81e59c7d488939370"' }>
                                            <li class="link">
                                                <a href="controllers/EntrepriseController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EntrepriseController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/InternshipOfferController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InternshipOfferController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EntrepriseModule-f37448d5bc3d91a81e59c7d488939370"' : 'data-target="#xs-injectables-links-module-EntrepriseModule-f37448d5bc3d91a81e59c7d488939370"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EntrepriseModule-f37448d5bc3d91a81e59c7d488939370"' :
                                        'id="xs-injectables-links-module-EntrepriseModule-f37448d5bc3d91a81e59c7d488939370"' }>
                                        <li class="link">
                                            <a href="injectables/EntrepriseService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EntrepriseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/InternshipOfferService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InternshipOfferService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GestionPfeModule.html" data-type="entity-link">GestionPfeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GestionPfeModule-e711fcfb8cdbf3cd33932008e6416021"' : 'data-target="#xs-controllers-links-module-GestionPfeModule-e711fcfb8cdbf3cd33932008e6416021"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GestionPfeModule-e711fcfb8cdbf3cd33932008e6416021"' :
                                            'id="xs-controllers-links-module-GestionPfeModule-e711fcfb8cdbf3cd33932008e6416021"' }>
                                            <li class="link">
                                                <a href="controllers/RapportPfeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RapportPfeController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SalleSoutenanceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SalleSoutenanceController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SessionPfeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SessionPfeController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SoutenanceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SoutenanceController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/StudentController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StudentController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/SujetPfeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SujetPfeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GestionPfeModule-e711fcfb8cdbf3cd33932008e6416021"' : 'data-target="#xs-injectables-links-module-GestionPfeModule-e711fcfb8cdbf3cd33932008e6416021"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GestionPfeModule-e711fcfb8cdbf3cd33932008e6416021"' :
                                        'id="xs-injectables-links-module-GestionPfeModule-e711fcfb8cdbf3cd33932008e6416021"' }>
                                        <li class="link">
                                            <a href="injectables/RapportPfeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RapportPfeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SalleSoutenanceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SalleSoutenanceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionHoraireSalleUniqueConstraint.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SessionHoraireSalleUniqueConstraint</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SessionPfeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SessionPfeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SoutenanceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SoutenanceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SujetPfeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SujetPfeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AdminEntity.html" data-type="entity-link">AdminEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AdminRepository.html" data-type="entity-link">AdminRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntrepriseEntity.html" data-type="entity-link">EntrepriseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/EntrepriseRepository.html" data-type="entity-link">EntrepriseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenericEntity.html" data-type="entity-link">GenericEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/InternshipOfferDto.html" data-type="entity-link">InternshipOfferDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InternshipOfferEntity.html" data-type="entity-link">InternshipOfferEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PassportJwtStrategy.html" data-type="entity-link">PassportJwtStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessorEntity.html" data-type="entity-link">ProfessorEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessorRepository.html" data-type="entity-link">ProfessorRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RapportPfeDto.html" data-type="entity-link">RapportPfeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RapportPfeEntity.html" data-type="entity-link">RapportPfeEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/SalleSoutenanceDto.html" data-type="entity-link">SalleSoutenanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SalleSoutenanceEntity.html" data-type="entity-link">SalleSoutenanceEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionHoraireEntity.html" data-type="entity-link">SessionHoraireEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionPfeDto.html" data-type="entity-link">SessionPfeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SessionPfeEntity.html" data-type="entity-link">SessionPfeEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/SoutenanceDto.html" data-type="entity-link">SoutenanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SoutenanceEntity.html" data-type="entity-link">SoutenanceEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentEntity.html" data-type="entity-link">StudentEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentRegisterDto.html" data-type="entity-link">StudentRegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentRepository.html" data-type="entity-link">StudentRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentService.html" data-type="entity-link">StudentService</a>
                            </li>
                            <li class="link">
                                <a href="classes/SujetPfeDto.html" data-type="entity-link">SujetPfeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SujetPfeDtoUpdate.html" data-type="entity-link">SujetPfeDtoUpdate</a>
                            </li>
                            <li class="link">
                                <a href="classes/SujetPfeEntity.html" data-type="entity-link">SujetPfeEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Timestamp.html" data-type="entity-link">Timestamp</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueExceptionFilter.html" data-type="entity-link">UniqueExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link">UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link">UserLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSubscribeDto.html" data-type="entity-link">UserSubscribeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Year.html" data-type="entity-link">Year</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/OwnerGuard.html" data-type="entity-link">OwnerGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link">RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});