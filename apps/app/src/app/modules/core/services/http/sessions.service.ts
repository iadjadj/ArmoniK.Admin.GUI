import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application, Pagination } from '@armonik.admin.gui/armonik-typing';
import { catchError, Observable } from 'rxjs';
import { Session } from '../../entities';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  private url = 'api/sessions';

  constructor(private http: HttpClient, private errorsService: ErrorsService) {}

  /**
   * Used to get the list of sessions from the api using pagination and filters
   *
   * @param applicationName Name of the app
   * @param page Page number
   * @param limit Number of items per page
   *
   * @returns Pagination of sessions
   */
  getAllPaginated(
    applicationName: Application['_id'],
    page: number = 1,
    limit: number = 10
  ): Observable<Pagination<Session>> {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      applicationName,
    });

    return this.http
      .get<Pagination<Session>>(`${this.url}?${params.toString()}`)
      .pipe(
        catchError(
          this.errorsService.handleError('getAllPaginated', applicationName)
        )
      );
  }

  /**
   * Used to get one session by id
   *
   * @param id Id of the session
   *
   * @returns Session
   */
  getOne(id: string): Observable<Session> {
    return this.http
      .get<Session>(`${this.url}/${id}`)
      .pipe(catchError(this.errorsService.handleError('getOne', id)));
  }
}
