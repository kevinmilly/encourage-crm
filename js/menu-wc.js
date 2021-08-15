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
                    <a href="index.html" data-type="index-link">encouragement-crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
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
                                <a href="modules/AnalyticsModule.html" data-type="entity-link" >AnalyticsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AnalyticsModule-5d9b051881db56df45cc7fd1220f1a2d"' : 'data-target="#xs-components-links-module-AnalyticsModule-5d9b051881db56df45cc7fd1220f1a2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AnalyticsModule-5d9b051881db56df45cc7fd1220f1a2d"' :
                                            'id="xs-components-links-module-AnalyticsModule-5d9b051881db56df45cc7fd1220f1a2d"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AnalyticsRoutingModule.html" data-type="entity-link" >AnalyticsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-863b34f9e39f04dd876bc6526dd9dde3"' : 'data-target="#xs-components-links-module-AppModule-863b34f9e39f04dd876bc6526dd9dde3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-863b34f9e39f04dd876bc6526dd9dde3"' :
                                            'id="xs-components-links-module-AppModule-863b34f9e39f04dd876bc6526dd9dde3"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardsModule.html" data-type="entity-link" >CardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardsModule-fa848c4a642be33bd5ae9fbd50fb66d7"' : 'data-target="#xs-components-links-module-CardsModule-fa848c4a642be33bd5ae9fbd50fb66d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardsModule-fa848c4a642be33bd5ae9fbd50fb66d7"' :
                                            'id="xs-components-links-module-CardsModule-fa848c4a642be33bd5ae9fbd50fb66d7"' }>
                                            <li class="link">
                                                <a href="components/GeneralCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneralCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactRoutingModule.html" data-type="entity-link" >ContactRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactsModule.html" data-type="entity-link" >ContactsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactsModule-40f977e00825695889edbe31771e9d04"' : 'data-target="#xs-components-links-module-ContactsModule-40f977e00825695889edbe31771e9d04"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactsModule-40f977e00825695889edbe31771e9d04"' :
                                            'id="xs-components-links-module-ContactsModule-40f977e00825695889edbe31771e9d04"' }>
                                            <li class="link">
                                                <a href="components/AddContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-ContactsModule-40f977e00825695889edbe31771e9d04"' : 'data-target="#xs-pipes-links-module-ContactsModule-40f977e00825695889edbe31771e9d04"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-ContactsModule-40f977e00825695889edbe31771e9d04"' :
                                            'id="xs-pipes-links-module-ContactsModule-40f977e00825695889edbe31771e9d04"' }>
                                            <li class="link">
                                                <a href="pipes/RatingColorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RatingColorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-7fc7259d51420f7ab50dbe8d172658c2"' : 'data-target="#xs-components-links-module-CoreModule-7fc7259d51420f7ab50dbe8d172658c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-7fc7259d51420f7ab50dbe8d172658c2"' :
                                            'id="xs-components-links-module-CoreModule-7fc7259d51420f7ab50dbe8d172658c2"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-bea9b4d7a6259242fd34c485578906ab"' : 'data-target="#xs-components-links-module-LayoutModule-bea9b4d7a6259242fd34c485578906ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-bea9b4d7a6259242fd34c485578906ab"' :
                                            'id="xs-components-links-module-LayoutModule-bea9b4d7a6259242fd34c485578906ab"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidenavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotesModule.html" data-type="entity-link" >NotesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotesModule-1115d5c7e2ee77c67a59682e31ae93ba"' : 'data-target="#xs-components-links-module-NotesModule-1115d5c7e2ee77c67a59682e31ae93ba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotesModule-1115d5c7e2ee77c67a59682e31ae93ba"' :
                                            'id="xs-components-links-module-NotesModule-1115d5c7e2ee77c67a59682e31ae93ba"' }>
                                            <li class="link">
                                                <a href="components/AddNoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddNoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotesRoutingModule.html" data-type="entity-link" >NotesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c640910c6db3f98b6e2ac1e6f627f767"' : 'data-target="#xs-components-links-module-SharedModule-c640910c6db3f98b6e2ac1e6f627f767"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c640910c6db3f98b6e2ac1e6f627f767"' :
                                            'id="xs-components-links-module-SharedModule-c640910c6db3f98b6e2ac1e6f627f767"' }>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-c640910c6db3f98b6e2ac1e6f627f767"' : 'data-target="#xs-pipes-links-module-SharedModule-c640910c6db3f98b6e2ac1e6f627f767"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-c640910c6db3f98b6e2ac1e6f627f767"' :
                                            'id="xs-pipes-links-module-SharedModule-c640910c6db3f98b6e2ac1e6f627f767"' }>
                                            <li class="link">
                                                <a href="pipes/ContactDetailTranslatorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactDetailTranslatorPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EnumUserDisplayTranslatorPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnumUserDisplayTranslatorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabModule.html" data-type="entity-link" >TabModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabModule-592125b279e1acb1679744801a8aded8"' : 'data-target="#xs-components-links-module-TabModule-592125b279e1acb1679744801a8aded8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabModule-592125b279e1acb1679744801a8aded8"' :
                                            'id="xs-components-links-module-TabModule-592125b279e1acb1679744801a8aded8"' }>
                                            <li class="link">
                                                <a href="components/TabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TaskModule-410c6204ffe857e3785eec7a1ee0a775"' : 'data-target="#xs-components-links-module-TaskModule-410c6204ffe857e3785eec7a1ee0a775"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TaskModule-410c6204ffe857e3785eec7a1ee0a775"' :
                                            'id="xs-components-links-module-TaskModule-410c6204ffe857e3785eec7a1ee0a775"' }>
                                            <li class="link">
                                                <a href="components/AddTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TasksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TasksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskRoutingModule.html" data-type="entity-link" >TaskRoutingModule</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BackendService.html" data-type="entity-link" >BackendService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactEffects.html" data-type="entity-link" >ContactEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactMetricService.html" data-type="entity-link" >ContactMetricService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetricsService.html" data-type="entity-link" >MetricsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NoteEffects.html" data-type="entity-link" >NoteEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskEffects.html" data-type="entity-link" >TaskEffects</a>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContactState.html" data-type="entity-link" >ContactState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Day.html" data-type="entity-link" >Day</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormSetupModel.html" data-type="entity-link" >FormSetupModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NoteState.html" data-type="entity-link" >NoteState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TaskState.html" data-type="entity-link" >TaskState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/TaskEnumDisplayPipe.html" data-type="entity-link" >TaskEnumDisplayPipe</a>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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