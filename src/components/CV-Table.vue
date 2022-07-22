<template>
	<v-container fluid class="container font-big">
        <v-row>
            <v-col cols="5">
                <table id="CV">
                    <tr id="Name">
                        <td colspan=2 class="text-center">
                            <h1 class="font-title">Juan Diego Morales del Corral</h1>
                        </td>
                    </tr>
                    <tr id="Personal Information">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Información Personal|Personal Information")}}</strong></p>
                        </td>
                        <td class="data-column font-big text-left">
                                <p><span class="bold">{{splitLanguage("Profesión|Profession")}}</span> {{splitLanguage("Ingeniero de Sonido|Sound Engineer")}}</p>
                                <p>
                                    <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="mr-1 icon svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>
                                    {{address}}
                                </p>
                                <p>
                                    <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="mr-1 icon svg-inline--fa fa-phone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></span>
                                    {{phone}}
                                </p>
                                <p>
                                    <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" class="mr-1 icon svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg></span>
                                    {{cellphone}}
                                </p>
                                <a href="mailto:dmdelcor@gmail.com">
                                    <span><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="mr-1 icon svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg></span>
                                    {{email}}
                                </a>
                                <p>
                                    <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="id-card" class="mr-1 icon svg-inline--fa fa-id-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"></path></svg></span>
                                    {{id}}
                                </p>
                                <a href="https://github.com/dyeggoM" target="_blank">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"  class="mr-1 icon svg-inline--fa fa-id-card fa-w-18" role="img"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></span>
                                    dyeggoM
                                </a>
                                <br/>
                                <a href="https://www.linkedin.com/in/diego-m-a95033245/" target="_blank">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="mr-1 icon svg-inline--fa fa-id-card fa-w-18" role="img"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></span>
                                    diego-m-a95033245
                                </a>
                        </td>
                    </tr>
                    <tr id="Personal Profile">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Perfil Personal|Personal Profile")}}</strong></p>
                        </td>
                        <td class="data-column font-big text-justify">
                            <p v-for="(text,index) in personalProfile[languageId]" :key="index"><span v-if="text.show">{{text.text}}</span></p>
                        </td>
                    </tr>
                    <tr id="Professional Experience Label">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Experiencia Profesional|Professional Experience")}}</strong></p>
                        </td>
                        <td class="data-column font-big text-left">
                            <div class="flex"><hr /></div>
                        </td>
                    </tr>
                    <tr :id="`Professional Experience-${index}`" v-for="(data, index) in professionalExperience" :key="`professionalExperience-${index}`">
                        <td class="info-column text-right" v-if="data.show">
                            <p><strong>{{splitLanguage(data.date)}}</strong></p>
                        </td>
                        <td class="data-column font-big text-left" v-if="data.show">
                            <p><strong>{{splitLanguage(data.title)}}</strong></p>
                            <p class="font-small mb-1">{{data.business}}</p>
                            <p v-for="(data2,index2) in data.data" :key="index2" class="font-big"><span v-if="data2.show">{{splitLanguage(data2.text)}}</span></p>
                        </td>
                    </tr>
                    <tr id="Education and Training Label">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Educación y Formación|Education and Training")}}</strong></p>
                        </td>
                        <td class="data-column font-big text-left">
                            <div class="flex"><hr /></div>
                        </td>
                    </tr>
                    <tr :id="`Education and Training-${index}`" v-for="(data,index) in educationTraining" :key="`educationTraining-${index}`">
                        <td class="info-column text-right" v-if="data.show">
                            <p><strong>{{data.date}}</strong></p>
                        </td>
                        <td class="data-column font-big text-left" v-if="data.show">
                            <p><strong>{{splitLanguage(data.title)}}</strong></p>
                            <p class="font-small mb-1">{{splitLanguage(data.business)}}</p>
                            <p v-for="(data2,index2) in data.data" :key="index2" class="font-big"><span v-if="data2.show">{{splitLanguage(data2.text)}}</span></p>
                        </td>
                    </tr>
                    <tr id="Personal Skills Label">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Competencias Personales|Personal Skills")}}</strong></p>
                        </td>
                        <td class="data-column font-big text-left">
                            <div class="flex"><hr /></div>
                        </td>
                    </tr>
                    <tr id="Languages">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Idiomas|Languages")}}</strong></p>
                        </td>
                        <td class="data-column font-big text-left">
                            <table>
                                <tr class="text-left font-big">
                                    <td class="padding-0 w-25"><strong>{{splitLanguage("Idioma|Language")}}</strong></td>
                                    <td class="padding-0 w-25"><strong>{{splitLanguage("Nivel|Level")}}</strong></td>
                                    <td class="padding-0 w-50"><strong>{{splitLanguage("Certificado|Certificate")}}</strong></td>
                                </tr>
                                <tr v-for="(data,index) in languageSkills" :key="index" class="font-small">
                                    <td class="padding-0" v-if="data.show"><p>{{splitLanguage(data.language)}}</p></td>
                                    <td class="padding-0" v-if="data.show"><p>{{splitLanguage(data.level)}}</p></td>
                                    <td class="padding-0" v-if="data.show"><p>{{splitLanguage(data.certificate)}}</p></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr id="Digital Skills">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Competencias Digitales|Digital Skills")}}</strong></p>
                        </td>
                        <td class="data-column font-big text-left">
                            <table class="font-big">
                                <tr>
                                    <td class="vertical-top">
                                        <div v-for="(data,index) in splitSkills(0)" :key="`f-${index}`">
                                            <p v-if="!data.listItem" class="mb-1"><strong>{{splitLanguage(data.text)}}</strong></p>
                                            <ul class="font-small">
                                                <li v-if="data.listItem">{{data.text}}</li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td class="vertical-top">
                                        <div v-for="(data,index) in splitSkills(1)" :key="`f-${index}`">
                                            <p v-if="!data.listItem" class="mb-1"><strong>{{splitLanguage(data.text)}}</strong></p>
                                            <ul class="font-small">
                                                <li v-if="data.listItem">{{data.text}}</li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr id="Certificates">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Certificados|Certificates")}}</strong></p>
                        </td>
                        <td class="data-column text-left">
                            <ul v-for="(data,index) in certifications" :key="index" class="font-small">
                                <li v-if="data.show">{{splitLanguage(data.data)}} - {{data.date}}</li>
                            </ul>
                        </td>
                    </tr>
                    <tr id="Personal Interest">
                        <td class="info-column text-right">
                            <p><strong>{{splitLanguage("Intereses Personales|Personal Interest")}}</strong></p>
                        </td>
                        <td class="data-column text-left">
                            <ul v-for="(data,index) in personalInterests" :key="index" class="font-small">
                                <li v-if="data.show">{{splitLanguage(data.data)}}</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </v-col>
            <v-col cols="7">
                <v-expansion-panels accordion>
                    <v-expansion-panel id="Personal Profile">
                        <v-expansion-panel-header>
                            {{splitLanguage("Perfil Personal|Personal Profile")}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col cols="3" class="text-right">
                                    <p><strong>{{splitLanguage("Perfil Personal|Personal Profile")}}</strong></p>
                                </v-col>
                                <v-col cols="9" class="font-14 text-justify">
                                    <v-row v-for="(text,index) in personalProfile[languageId]" :key="index" align="center">
                                        <v-checkbox class="mt-0" v-model="text.show" hide-details :label="text.text"></v-checkbox>
                                        <!-- <v-textarea v-model="text.text" hide-details rows=3></v-textarea> -->
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel id="Professional Experience ">
                        <v-expansion-panel-header>
                            {{splitLanguage("Experiencia Profesional|Professional Experience")}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-expansion-panels accordion>
                                <v-expansion-panel v-for="(data, index) in professionalExperience" :key="index">
                                    <v-expansion-panel-header>
                                        {{splitLanguage(data.title)}}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-row>
                                            <v-col cols="3" class="text-right">
                                                <v-checkbox class="mt-0" v-model="data.show" hide-details :label="splitLanguage(data.date)"></v-checkbox>
                                            </v-col>
                                            <v-col cols="9" class="text-left">
                                                <p><strong>{{splitLanguage(data.title)}}</strong></p>
                                                <p class="font-12 mb-1">{{data.business}}</p>
                                                <div v-for="(data2,index2) in data.data" :key="index2" class="font-14"><v-checkbox class="mt-0" v-model="data2.show" hide-details :label="splitLanguage(data2.text)"></v-checkbox></div>
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel  id="Education and Training">
                        <v-expansion-panel-header>
                            {{splitLanguage("Educación y Formación|Education and Training")}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row :id="`Education and Training-${index}`" v-for="(data,index) in educationTraining" :key="index">
                                <v-col cols="3" class="text-right">
                                    <v-checkbox class="mt-0" v-model="data.show" hide-details :label="splitLanguage(data.date)"></v-checkbox>
                                </v-col>
                                <v-col cols="9" class="text-left">
                                    <p><strong>{{splitLanguage(data.title)}}</strong></p>
                                    <p class="font-12 mb-1">{{splitLanguage(data.business)}}</p>
                                    <p v-for="(data2,index2) in data.data" :key="index2" class="font-14"><span v-if="data2.show">{{splitLanguage(data2.text)}}</span></p>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel id="Languages">
                        <v-expansion-panel-header>
                            {{splitLanguage("Idiomas|Languages")}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                                <v-row no-gutters>
                                    <v-col cols="1"></v-col>
                                    <v-col cols="3"><strong>{{splitLanguage("Idioma|Language")}}</strong></v-col>
                                    <v-col cols="4"><strong>{{splitLanguage("Nivel|Level")}}</strong></v-col>
                                    <v-col cols="4"><strong>{{splitLanguage("Certificado|Certificate")}}</strong></v-col>
                                </v-row>
                                <v-row  no-gutters v-for="(data,index) in languageSkills" :key="index" class="font-14">
                                    <v-col cols="1"><v-checkbox class="mt-0" v-model="data.show" hide-details></v-checkbox></v-col>
                                    <v-col cols="3"><p>{{splitLanguage(data.language)}}</p></v-col>
                                    <v-col cols="4"><p>{{splitLanguage(data.level)}}</p></v-col>
                                    <v-col cols="4"><p>{{splitLanguage(data.certificate)}}</p></v-col>
                                </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel id="Digital Skills">
                        <v-expansion-panel-header>
                            {{splitLanguage("Competencias Digitales|Digital Skills")}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-expansion-panels accordion>
                                <v-expansion-panel v-for="(data,index) in digitalSkillsGroups" :key="`f-${index}`">
                                    <v-expansion-panel-header>
                                        {{splitLanguage(data.group)}}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-checkbox class="mt-0" v-model="data.show" hide-details :label="splitLanguage(data.group)"></v-checkbox>
                                        <ul v-for="(data2,index2) in findDigitalSkillsByGroup(data.group)" :key="index2">
                                            <li><v-checkbox class="mt-0" v-model="data2.show" hide-details :label="`${data2.skill} - ${splitLanguage(data2.level)}`"></v-checkbox></li>
                                        </ul>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel id="Certificates">
                        <v-expansion-panel-header>
                            {{splitLanguage("Certificados|Certificates")}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <ul v-for="(data,index) in sortCertificatesByDate()" :key="index" class="font-14">
                                <li><v-checkbox class="mt-0" v-model="data.show" hide-details :label="splitLanguage(data.data)"></v-checkbox></li>
                            </ul>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel id="Personal Interest">
                        <v-expansion-panel-header>
                            {{splitLanguage("Intereses Personales|Personal Interest")}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <ul v-for="(data,index) in personalInterests" :key="index" class="font-14">
                                <li><v-checkbox class="mt-0" v-model="data.show" hide-details :label="splitLanguage(data.data)"></v-checkbox></li>
                            </ul>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
        
	</v-container>
</template>

<script>
const VUE_APP_ADDRESS = process.env.VUE_APP_ADDRESS;
const VUE_APP_PHONE = process.env.VUE_APP_PHONE;
const VUE_APP_CELPHONE = process.env.VUE_APP_CELPHONE;
const VUE_APP_EMAIL = process.env.VUE_APP_EMAIL;
const VUE_APP_ID = process.env.VUE_APP_ID;
	import { mapState } from "vuex";
	export default {
		name: 'CV-Table',
		mounted(){
		},
		computed:{
			...mapState([
                "languageId", 
                "personalProfile", 
                "professionalExperience", 
                "educationTraining",
                "languageSkills",
                "digitalSkillsGroups",
                "digitalSkills",
                "personalInterests",
                "certifications",
            ]),
            digitalSkillsTable(){
                let groups = this.sortGroups();
                let list = []
                for(let i = 0; i < groups.length; i++){
                    list.push({listItem:false, text:groups[i].group})
                    let skills = this.findDigitalSkillsByGroup(groups[i].group).filter(x=>x.show===true);
                    for(let j = 0; j<skills.length;j++){
                        let text = `${skills[j].skill} - ${this.splitLanguage(skills[j].level)}`;
                        list.push({listItem:true, text:text})
                    }
                }
                return list
            },
			address(){
				return VUE_APP_ADDRESS;
			},
			phone(){
				return VUE_APP_PHONE;
			},
			cellphone(){
				return VUE_APP_CELPHONE;
			},
			email(){
				return VUE_APP_EMAIL;
			},
			id(){
				return VUE_APP_ID;
			}
		},
		methods:{
			splitLanguage(string){
				return string.split("|")[this.languageId];
			},
			findDigitalSkillsByGroup(group){
				let skills = this.digitalSkills.filter(x=>x.group == group)
				return skills.sort((a,b)=> a.sort > b.sort? 1: -1 && a.skill > b.skill? 1: -1)
			},
			sortGroups(){
				let groups = this.digitalSkillsGroups.sort((a,b)=> a.group > b.group? 1: -1).filter(x=>x.show===true);
				return groups;
			},
            splitSkills(idSide){
                let skills = this.digitalSkillsTable;
                let halfLength = Math.ceil(skills.length/2);
                if(idSide == 0){
                    return skills.slice(0,halfLength);
                }
                else{
                    return skills.slice(halfLength,skills.length);
                }
            },
            sortCertificatesByDate(){
                return this.certifications.sort((a,b)=> a.date > b.date? 1: -1)
            }
		},
		data: () => ({
		}),
	}
</script>

<style scoped>
    a{
        text-decoration: none;
        color:black !important;
    }
	p{
        padding: 0px !important;
		margin: 0px !important;
	}
    .icon{
        width:14px;
        height:14px;
    }
    .w-25{
        width:25%;
    }
    .w-50{
        width:50%;
    }
    .padding-0{
        padding:0px;
    }
    td{
        padding: 5px;
    }
    .vertical-top{
        vertical-align: top;
    }
	.container{
		width:100%;
	}
    .info-column{
        width:175px;
        vertical-align: top;
    }
    .data-column{
        width:525px;
    }
	.bold{
		font-weight: bolder;
	}
	.flex-div{
		width:100%; 
		height:100%; 
		display:flex; 
		flex-direction:column; 
		justify-content:end;
	}
	.font-small{
		font-size:10px;
	}
	.font-big{
		font-size:12px;
	}
    .font-title{
        font-size: 16px;;
    }
</style>